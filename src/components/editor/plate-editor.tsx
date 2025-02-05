import { Plate } from "@udecode/plate/react";

import { useCreateEditor } from "@/components/editor/use-create-editor";
import { Editor, EditorContainer } from "@/components/plate-ui/editor";
import { FixedToolbar } from "../plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "../plate-ui/fixed-toolbar-buttons";
import { Button } from "../plate-ui/button";
import { Send, X } from "lucide-react";
import { EmojiDropdownMenu } from "../plate-ui/emoji-dropdown-menu";
import { ToolbarGroup } from "../plate-ui/toolbar";
import { LinkToolbarButton } from "../plate-ui/link-toolbar-button";
import { MediaToolbarButton } from "../plate-ui/media-toolbar-button";
import { FilePlugin } from "@udecode/plate-media/react";

export function PlateEditor() {
  const editor = useCreateEditor();

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <FixedToolbar className="p-2 flex" dir="rtl">
          <FixedToolbarButtons />
          <Button
            className="rounded-xl gap-2 text-gray-500 bg-muted p-2"
            variant="outline"
          >
            <MediaToolbarButton nodeType={FilePlugin.key} />
            استدعاء من قالب
          </Button>
        </FixedToolbar>
        <Editor
          placeholder="إضافة نص...."
          className="px-6 py-4  border-0 outline-none overflow-y-auto "
          autoFocus
        />
        <FixedToolbar className="p-2 flex justify-between flex-row-reverse">
          <ToolbarGroup>
            <LinkToolbarButton />
            <EmojiDropdownMenu />
          </ToolbarGroup>
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
      </EditorContainer>
    </Plate>
  );
}
