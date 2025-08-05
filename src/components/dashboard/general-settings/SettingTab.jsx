import { useEffect, useState } from "react";
import { toast } from "sonner";
import JoditEditor from "jodit-react";
import SubmitButton from "../../../ui/forms/SubmitButton";
import useGetSettings from "../../../hooks/settings/useGetSettings";
import axiosInstance from "../../../utils/axiosInstance";
import DataLoader from "../../../ui/DataLoader";

export default function SettingTab({ title, type }) {
  const [content, setContent] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const { data: settings, isLoading } = useGetSettings(type);

  const editorConfig = {
    readonly: false,
    placeholder: "Start typing here...",
    height: 350,
  };

  useEffect(() => {
    if (settings) {
      setContent({
        describtion_ar: settings.describtion_ar,
        describtion_en: settings.describtion_en,
      });
    }
  }, [settings]);

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const res = await axiosInstance.put(
        `/dashboard/settings/update/${type}`,
        content
      );

      if (res.status === 200) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      throw error;
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <form className="tab_wrapper" onSubmit={handleSave}>
      <div className="input-field mb-3">
        <h6>{title}</h6>

        {isLoading ? (
          <DataLoader />
        ) : (
          <>
            <div className="d-flex flex-column gap-2 mb-3">
              <label>Description ( Arabic )</label>
              <JoditEditor
                config={editorConfig}
                value={content.describtion_ar}
                onChange={(value) =>
                  setContent({ ...content, describtion_ar: value })
                }
              />
            </div>

            <div className="d-flex flex-column gap-2">
              <label>Description ( English )</label>
              <JoditEditor
                config={editorConfig}
                value={content.describtion_en}
                onChange={(value) =>
                  setContent({ ...content, describtion_en: value })
                }
              />
            </div>
          </>
        )}
      </div>

      <div className="d-flex justify-content-end">
        <SubmitButton text="Save" loading={isSaving} />
      </div>
    </form>
  );
}
