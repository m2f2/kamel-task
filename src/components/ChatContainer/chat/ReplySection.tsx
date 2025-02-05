import { PlateEditor } from "@/components/editor/plate-editor";

export const ReplySection = () => {
  return (
    <section className="w-full  bg-white px-4 sm:px-6 lg:px-8 py-6 sm:py-3">
      <div className="mb-4 sm:mb-2">
        <p className="text-lg font-bold text-black mb-2">
          رد الي : الشركة المتحدة للطاقة الشمسية
        </p>
      </div>

      <div className="border rounded-xl shadow-sm p-3">
        <PlateEditor />
      </div>
    </section>
  );
};