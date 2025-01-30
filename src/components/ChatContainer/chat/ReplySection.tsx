import { PlateEditor } from "@/components/editor/plate-editor";

export const ReplySection = () => {
  return (
    <section className=" pt-6 bg-white  mx-10 ">
      <div className="mb-4">
        <p className="text-lg font-bold text-black mb-2">
          رد الي : الشركة المتحدة للطاقة الشمسية
        </p>
      </div>

      <div className="border rounded-xl">
        {/* <PlateEditor /> */}
        <PlateEditor/>
      </div>
    </section>
  );
};
