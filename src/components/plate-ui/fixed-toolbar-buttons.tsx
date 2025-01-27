import { MARK_BOLD, MARK_ITALIC } from "@udecode/plate-basic-marks";
import { Icons } from "@/components/icons";

import AlignmentButton from "../PlateEditor/AlignToolbarButton";
import { IndentToolbarButton } from "./indent-toolbar-button";
import { MarkToolbarButton } from "./mark-toolbar-button";
import { OutdentToolbarButton } from "./outdent-toolbar-button";
import { ToolbarGroup } from "./toolbar";

export function FixedToolbarButtons() {
  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex flex-wrap"
        style={{
          transform: "translateX(calc(-1px))",
        }}
      >
        <ToolbarGroup>
          {/* Text Mark Buttons */}
          <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>
            <Icons.bold />
          </MarkToolbarButton>
          <MarkToolbarButton tooltip="Italic (⌘+I)" nodeType={MARK_ITALIC}>
            <Icons.italic />
          </MarkToolbarButton>

          {/* Alignment Buttons */}
          <AlignmentButton
            tooltip="Align Right (⌘+R)"
            align="right"
            icon={<Icons.alignRight />}
          />
          <AlignmentButton
            tooltip="Align Center (⌘+E)"
            align="center"
            icon={<Icons.alignCenter />}
          />
          <AlignmentButton
            tooltip="Justify (⌘+J)"
            align="justify"
            icon={<Icons.alignJustify />}
          />
          <AlignmentButton
            tooltip="Align Left(⌘+L)"
            align="left"
            icon={<Icons.alignLeft />}
          />

  
          {/* Indentation Buttons */}

          <IndentToolbarButton tooltip="Indent (⌘+])">
            <Icons.indent />
          </IndentToolbarButton>
          <OutdentToolbarButton tooltip="Outdent (⌘+[)">
            <Icons.outdent />
          </OutdentToolbarButton>

          {/* List Button */}
          <MarkToolbarButton tooltip="Bulleted List (⌘+Shift+8)" nodeType={''}>
            <Icons.ul />
          </MarkToolbarButton>
        </ToolbarGroup>
      </div>
    </div>
  );
}
