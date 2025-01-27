import { PlateEditor } from "@/components/PlateEditor";
export const ReplySection = () => {
  return (
    <section className=" pt-6 bg-white  mx-10 ">
      <div className="mb-4">
        <p className="text-lg font-bold text-black mb-2">
          رد الي : الشركة المتحدة للطاقة الشمسية
        </p>
      </div>

      <div className="border rounded-xl">
        <PlateEditor />
      </div>
    </section>
  );
};
