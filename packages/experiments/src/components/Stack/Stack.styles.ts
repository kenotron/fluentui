import { IStackComponent, IStackStyles, IStackProps } from './Stack.types';
import { getVerticalAlignment, parseGap, parsePadding } from './StackUtils';
import { getGlobalClassNames } from '../../Styling';

const nameMap: { [key: string]: string } = {
  start: 'flex-start',
  end: 'flex-end'
};

const GlobalClassNames = {
  root: 'ms-Stack',
  inner: 'ms-Stack-inner'
};

export const styles: IStackComponent['styles'] = props => {
  const {
    horizontalFill,
    verticalFill,
    maxWidth,
    maxHeight,
    horizontal,
    gap,
    verticalGap,
    grow,
    wrap,
    padding,
    horizontalAlign,
    verticalAlign,
    shrinkItems,
    theme,
    className
  } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  const vertAlign = getVerticalAlignment(verticalAlign);

  let horiGap: IStackProps['gap'];
  let vertGap: IStackProps['gap'];

  horiGap = gap;
  vertGap = verticalGap !== undefined ? verticalGap : gap;

  const hGap = parseGap(horiGap, theme);
  const vGap = parseGap(vertGap, theme);

  const horizontalMargin = `${-0.5 * hGap.value}${hGap.unit}`;
  const verticalMargin = `${-0.5 * vGap.value}${vGap.unit}`;

  // styles to be applied to all direct children regardless of wrap or direction
  const childStyles = {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  };

  // selectors to be applied regardless of wrap or direction
  const commonSelectors = {
    // flexShrink styles are applied by the StackItem
    '> *:not(.ms-StackItem)': {
      flexShrink: shrinkItems ? 1 : 0
    }
  };

  if (wrap) {
    return {
      root: [
        classNames.root,
        {
          flexWrap: 'wrap',
          maxWidth,
          maxHeight,
          width: 'auto',
          overflow: 'visible',
          height: '100%'
        },
        horizontalAlign && {
          [horizontal ? 'justifyContent' : 'alignItems']: nameMap[horizontalAlign] || horizontalAlign
        },
        vertAlign && {
          [horizontal ? 'alignItems' : 'justifyContent']: nameMap[vertAlign] || vertAlign
        },
        className,
        {
          // not allowed to be overridden by className
          // since this is necessary in order to prevent collapsing margins
          display: 'flex'
        }
      ],

      inner: [
        classNames.inner,
        {
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: horizontalMargin,
          marginRight: horizontalMargin,
          marginTop: verticalMargin,
          marginBottom: verticalMargin,
          overflow: 'visible',
          boxSizing: 'border-box',
          padding: parsePadding(padding, theme),
          // avoid unnecessary calc() calls if horizontal gap is 0
          width: hGap.value === 0 ? '100%' : `calc(100% + ${hGap.value}${hGap.unit})`,
          maxWidth: '100vw',

          selectors: {
            '> *': {
              margin: `${0.5 * vGap.value}${vGap.unit} ${0.5 * hGap.value}${hGap.unit}`,

              ...childStyles
            },
            ...commonSelectors
          }
        },
        horizontalAlign && {
          [horizontal ? 'justifyContent' : 'alignItems']: nameMap[horizontalAlign] || horizontalAlign
        },
        vertAlign && {
          [horizontal ? 'alignItems' : 'justifyContent']: nameMap[vertAlign] || vertAlign
        },
        horizontal && {
          flexDirection: 'row',

          // avoid unnecessary calc() calls if vertical gap is 0
          height: vGap.value === 0 ? '100%' : `calc(100% + ${vGap.value}${vGap.unit})`,

          selectors: {
            '> *': {
              maxWidth: hGap.value === 0 ? '100%' : `calc(100% - ${hGap.value}${hGap.unit})`
            }
          }
        },
        !horizontal && {
          flexDirection: 'column',
          height: `calc(100% + ${vGap.value}${vGap.unit})`,

          selectors: {
            '> *': {
              maxHeight: vGap.value === 0 ? '100%' : `calc(100% - ${vGap.value}${vGap.unit})`
            }
          }
        }
      ]
    } as IStackStyles;
  }

  return {
    root: [
      classNames.root,
      {
        display: 'flex',
        flexDirection: horizontal ? 'row' : 'column',
        flexWrap: 'nowrap',
        width: horizontalFill && !wrap ? '100%' : 'auto',
        height: verticalFill && !wrap ? '100%' : 'auto',
        maxWidth,
        maxHeight,
        padding: parsePadding(padding, theme),
        boxSizing: 'border-box',

        selectors: {
          '> *': childStyles,

          // apply gap margin to every direct child except the first direct child
          '> *:not(:first-child)': [
            horizontal && {
              marginLeft: `${hGap.value}${hGap.unit}`
            },
            !horizontal && {
              marginTop: `${vGap.value}${vGap.unit}`
            }
          ],
          ...commonSelectors
        }
      },
      grow && {
        flexGrow: grow === true ? 1 : grow,
        overflow: 'hidden'
      },
      horizontalAlign && {
        [horizontal ? 'justifyContent' : 'alignItems']: nameMap[horizontalAlign] || horizontalAlign
      },
      vertAlign && {
        [horizontal ? 'alignItems' : 'justifyContent']: nameMap[vertAlign] || vertAlign
      },
      className
    ]
    // TODO: this cast may be hiding some potential issues with styling and name
    //        lookups and should be removed
  } as IStackStyles;
};
