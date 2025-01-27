import { Editor } from "@/components/plate-ui/editor";
import { EmojiCombobox } from "@/components/plate-ui/emoji-combobox";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import { TooltipProvider } from "@/components/plate-ui/tooltip";
import { withDraggables } from "@/components/plate-ui/with-draggables";
import { withProps } from "@udecode/cn";
import { createAlignPlugin } from "@udecode/plate-alignment";
import {
  createBoldPlugin,
  createItalicPlugin,
  MARK_BOLD,
  MARK_ITALIC,
} from "@udecode/plate-basic-marks";
import { createComboboxPlugin } from "@udecode/plate-combobox";
import { createPlugins, Plate, PlateLeaf } from "@udecode/plate-common";
import { createEmojiPlugin } from "@udecode/plate-emoji";
import { createIndentListPlugin } from "@udecode/plate-indent-list";
import {
  createParagraphPlugin,
  ELEMENT_PARAGRAPH,
} from "@udecode/plate-paragraph";
import { FilePlus, Send, X } from "lucide-react";
import { useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button } from "../plate-ui/button";
import { EmojiDropdownMenu } from "../plate-ui/emoji-dropdown-menu";
import { ParagraphElement } from "../plate-ui/paragraph-element";
import { withPlaceholders } from "../plate-ui/placeholder";

const plugins = createPlugins(
  [
    createParagraphPlugin(),
    createBoldPlugin(),
    createItalicPlugin(),
    createAlignPlugin({
      inject: {
        props: {
          validTypes: [ELEMENT_PARAGRAPH],
        },
      },
    }),
    createIndentListPlugin({
      inject: {
        props: {
          validTypes: [ELEMENT_PARAGRAPH],
        },
      },
    }),
    createComboboxPlugin(),
    createEmojiPlugin({
      renderAfterEditable: EmojiCombobox,
    }),
  ],
  {
    components: withDraggables(
      withPlaceholders({
        [MARK_BOLD]: withProps(PlateLeaf, { as: "strong" }),
        [MARK_ITALIC]: withProps(PlateLeaf, { as: "em" }),
        [ELEMENT_PARAGRAPH]: ParagraphElement,
      })
    ),
  }
);

export function PlateEditor() {
  const containerRef = useRef(null);

  return (
    <TooltipProvider>
      <DndProvider backend={HTML5Backend}>
        <Plate plugins={plugins}>
          <div
            ref={containerRef}
          >
            {/* Top Toolbar */}
            <FixedToolbar className="p-2 flex" dir="rtl">
              <FixedToolbarButtons />
              <Button
                className="h-9 rounded-xl gap-2 text-gray-500 bg-muted p-4"
                variant="outline"
              >
                <FilePlus className="h-4 w-4" />
                استدعاء من قالب
              </Button>
            </FixedToolbar>

            {/* Editor */}
            <Editor
              className="px-6 py-4 h-16 border-0"
              autoFocus
              focusRing={false}
              variant="outline"
              size="md"
              placeholder="إضافة نص...."
            />

            {/* Bottom Toolbar */}
            <FixedToolbar className="p-2 flex justify-between flex-row-reverse">
              <EmojiDropdownMenu />
              <div className="flex gap-2">
                <Button
                  size="lg"
                  className="bg-green-500 hover:bg-green-700 rounded-xl transition-colors text-white gap-2"
                  aria-label="إرسال الرسالة"
                >
                  <Send className="h-4 w-4" />
                  إرسال
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-gray-50 transition-colors gap-2 rounded-xl"
                  aria-label="إلغاء الرسالة"
                >
                  <X className="h-4 w-4" />
                  إلغاء
                </Button>
              </div>
            </FixedToolbar>
          </div>
        </Plate>
      </DndProvider>
    </TooltipProvider>
  );
}