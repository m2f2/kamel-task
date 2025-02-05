import {
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import { BoldIcon, ItalicIcon, UnderlineIcon } from 'lucide-react';

import { IndentToolbarButton } from './indent-toolbar-button';
import { MarkToolbarButton } from './mark-toolbar-button';
import { ToolbarGroup } from './toolbar';
import { Icons } from '../icons';
import AlignmentButton from '../editor/AlignToolbarButton';
import { OutdentToolbarButton } from './outdent-toolbar-button';

export function FixedToolbarButtons() {
  return (
    <div className="flex w-full">
      {/* Marks toolbar group */}
      <ToolbarGroup>
        <MarkToolbarButton nodeType={BoldPlugin.key} tooltip="Bold (⌘+B)">
          <BoldIcon />
        </MarkToolbarButton>

        <MarkToolbarButton nodeType={ItalicPlugin.key} tooltip="Italic (⌘+I)">
          <ItalicIcon />
        </MarkToolbarButton>

        <MarkToolbarButton nodeType={UnderlinePlugin.key} tooltip="Underline (⌘+U)">
          <UnderlineIcon />
        </MarkToolbarButton>
      </ToolbarGroup>

      {/* Alignment toolbar group */}
      <ToolbarGroup>
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
          tooltip="Align Left (⌘+L)"
          align="left"
          icon={<Icons.alignLeft />}
        />
      </ToolbarGroup>


      

      {/* Indentation toolbar group */}
      <ToolbarGroup>
        <OutdentToolbarButton />
        <IndentToolbarButton />
      </ToolbarGroup>
    </div>
  );
}