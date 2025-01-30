import emojiMartData from '@emoji-mart/data';
import { withProps } from '@udecode/cn';
import {
  ParagraphPlugin,
  PlateElement,
  PlateLeaf,
  usePlateEditor,
} from '@udecode/plate/react';
import { BasicElementsPlugin } from '@udecode/plate-basic-elements/react';
import {
  BasicMarksPlugin,
  BoldPlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from '@udecode/plate-basic-marks/react';
import { EmojiPlugin } from '@udecode/plate-emoji/react';
import { AlignPlugin } from '@udecode/plate-alignment/react';
import { HeadingPlugin } from '@udecode/plate-heading/react';

export const useCreateEditor = () => {
  return usePlateEditor({
    override: {
      components: {
        [BoldPlugin.key]: withProps(PlateLeaf, { as: 'strong' }),
        [ItalicPlugin.key]: withProps(PlateLeaf, { as: 'em' }),
        [ParagraphPlugin.key]: withProps(PlateElement, {
          as: 'p',
          className: 'mb-4',
        }),
        [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: 's' }),
        [UnderlinePlugin.key]: withProps(PlateLeaf, { as: 'u' }),
        blockquote: withProps(PlateElement, {
          as: 'blockquote',
          className: 'mb-4 border-l-4 border-[#d0d7de] pl-4 text-[#636c76]',
        }),
        h1: withProps(PlateElement, {
          as: 'h1',
          className:
            'mb-4 mt-6 text-3xl font-semibold tracking-tight lg:text-4xl',
        }),
        h2: withProps(PlateElement, {
          as: 'h2',
          className: 'mb-4 mt-6 text-2xl font-semibold tracking-tight',
        }),
        h3: withProps(PlateElement, {
          as: 'h3',
          className: 'mb-4 mt-6 text-xl font-semibold tracking-tight',
        }),
      },
    },
    plugins: [
      BasicElementsPlugin,
      BasicMarksPlugin,
      EmojiPlugin.configure({
        options: { data: emojiMartData },
      }),
      AlignPlugin.configure({
        inject: {
        },
      }),
      HeadingPlugin,
    ],
  });
};