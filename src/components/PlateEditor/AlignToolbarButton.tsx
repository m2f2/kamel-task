import { setAlign } from "@udecode/plate-alignment";
import { ToolbarButton } from "../plate-ui/toolbar";
import { useEditorRef } from "@udecode/plate-common";

interface AlignmentButtonProps {
  align: "left" | "center" | "right" | "justify";
  tooltip: string;
  icon: React.ReactNode;
}

const AlignmentButton = ({ align, tooltip, icon }: AlignmentButtonProps) => {
  const editor = useEditorRef();

  const handleClick = () => {
    setAlign(editor, { value: align });
  };

  return (
    <ToolbarButton tooltip={tooltip} onClick={handleClick}>
      {icon}
    </ToolbarButton>
  );
};
export default AlignmentButton;