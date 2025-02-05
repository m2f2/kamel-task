import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Plus, Pencil } from "lucide-react";
import SelectField, { SelectSection } from "../SelectSection";

const selectSections: SelectSection[] = [
  {
    label: "التصنيف",
    fieldName: "classification",
    defaultValue: "training-requests",
    options: [
      { value: "training-requests", label: "طلبات التدريب" },
      { value: "technical-support", label: "الدعم الفني" },
    ],
    icon: <Plus className="w-4 h-4" />,
  },
  {
    label: "مسؤول الدعم",
    fieldName: "support-manager",
    defaultValue: "bandar-ahmed",
    options: [
      {
        value: "bandar-ahmed",
        label: "بندر احمد",
        avatar: "avatars/ahmed.jpeg",
      },
    ],
  },
  {
    label: "الاهمية",
    fieldName: "priority",
    defaultValue: "low",
    options: [
      {
        value: "low",
        label: "منخفضة",
        statusColor: "bg-orange-400",
        textColor: "text-orange-400",
      },
      {
        value: "medium",
        label: "متوسطة",
        statusColor: "bg-yellow-400",
        textColor: "text-yellow-400",
      },
    ],
    icon: <ChevronDown className="w-4 h-4" />,
  },
  {
    label: "القسم",
    fieldName: "department",
    defaultValue: "maintenance",
    options: [
      { value: "maintenance", label: "الصيانة" },
      { value: "sales", label: "المبيعات" },
    ],
    icon: <Plus className="w-4 h-4" />,
  },
  {
    label: "اسم القناة",
    fieldName: "channel",
    defaultValue: "email",
    options: [
      { value: "email", label: "Email" },
      { value: "whatsapp", label: "WhatsApp" },
    ],
    icon: <Plus className="w-4 h-4" />,
  },
  {
    label: "الحالة",
    fieldName: "status",
    defaultValue: "open",
    options: [
      {
        value: "open",
        label: "مفتوح",
        statusColor: "bg-blue-400",
        textColor: "text-blue-400",
      },
      {
        value: "closed",
        label: "مغلق",
        statusColor: "bg-gray-400",
        textColor: "text-gray-400",
      },
    ],
    icon: <ChevronDown className="w-4 h-4" />,
  },
];

export function SidebarContent() {
  return (
    <>
      <Tabs defaultValue="details" className="w-full">
        <TabsList className="w-full grid grid-cols-2 pb-2 bg-white shadow-md rounded-t-lg">
          <TabsTrigger
            value="activity"
            className="text-lg border-b-4 border-transparent data-[state=active]:border-b-green-500"
          >
            النشاط
          </TabsTrigger>
          <TabsTrigger
            value="details"
            className="text-lg border-b-4 border-transparent data-[state=active]:border-b-green-500"
          >
            التفاصيل
          </TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <Card className="border-0 shadow-none">
            <CardContent className="space-y-4 p-4 max-h-[calc(100vh-100px)] overflow-y-auto my-4">
              {selectSections.map((section) => (
                <SelectField key={section.fieldName} section={section} />
              ))}
              <hr />
              <Button 
                variant="secondary" 
                className="w-full mt-4 gap-4 rounded-xl mb-5  sm:px-6 sm:py-2 sm:mt-6"
              >
                تعديل
                <Pencil className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="border-0 shadow-none">
            <CardContent className="p-4">activity</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}