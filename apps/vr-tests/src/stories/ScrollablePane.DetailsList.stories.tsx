/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Screener, { Steps } from 'screener-storybook/src/screener';
import { storiesOf } from '@storybook/react';
import { FabricDecorator } from '../utilities';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import {
  DetailsList,
  DetailsListLayoutMode,
  IDetailsHeaderProps,
  Selection,
  IColumn,
  ConstrainMode,
  IDetailsFooterProps,
  DetailsRow
} from 'office-ui-fabric-react/lib/DetailsList';
import { IRenderFunction } from 'office-ui-fabric-react/lib/Utilities';
import { TooltipHost, ITooltipHostProps } from 'office-ui-fabric-react/lib/Tooltip';
import { ScrollablePane, IScrollablePane, ScrollbarVisibility } from 'office-ui-fabric-react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from 'office-ui-fabric-react/lib/Sticky';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { lorem } from 'office-ui-fabric-react/lib/utilities/exampleData';
import { SelectionMode } from 'office-ui-fabric-react/lib/utilities/selection/index';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { getTheme } from 'office-ui-fabric-react/lib/Styling';
import './ScrollablePane.DetailsList.Story.scss';

const _columns: IColumn[] = [
  {
    key: 'column1',
    name: 'Test 1',
    fieldName: 'test1',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for name'
  },
  {
    key: 'column2',
    name: 'Test 2',
    fieldName: 'test2',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column3',
    name: 'Test 3',
    fieldName: 'test3',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column4',
    name: 'Test 4',
    fieldName: 'test4',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column5',
    name: 'Test 5',
    fieldName: 'test5',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for value'
  },
  {
    key: 'column6',
    name: 'Test 6',
    fieldName: 'test6',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
    ariaLabel: 'Operations for value'
  }
];

interface IItem {
  key: number;
  test1: string;
  test2: string;
  test3: string;
  test4: string;
  test5: string;
  test6: string;
}

class ScrollablePaneDetailsListStory extends React.Component<
  {},
  {
    items: {}[];
    selectionDetails: string;
  }
  > {
  private _scrollablePane = React.createRef<IScrollablePane>();
  private _selection: Selection;
  private readonly _items: IItem[];

  constructor(props: {}) {
    super(props);

    const items: IItem[] = [];

    // Populate with items for demos.
    for (let i = 0; i < 200; i++) {
      items.push({
        key: i,
        test1: i === 0 ? lorem(7) : lorem(2),
        test2: lorem(2),
        test3: lorem(2),
        test4: lorem(2),
        test5: lorem(2),
        test6: lorem(2)
      });
    }

    this._items = items;

    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() })
    });

    this.state = {
      items: items,
      selectionDetails: this._getSelectionDetails()
    };
  }

  public render(): JSX.Element {
    const { items, selectionDetails } = this.state;

    return (
      <div
        style={{
          height: '80vh',
          position: 'relative',
          maxHeight: 'inherit',
          width: '500px'
        }}
      >
        <Fabric>
          <ScrollablePane componentRef={this._scrollablePane} scrollbarVisibility={ScrollbarVisibility.auto} style={{ maxWidth: '500px', border: '1px solid #edebe9' }}>
            {/* providing backgroundColor as no parent element for the test has this property defined */}
            <Sticky stickyPosition={StickyPositionType.Header} stickyBackgroundColor={getTheme().palette.white}
              stickyClassName={'stickyListTitle'}>
              <h1 style={{ margin: '0px' }}>Item List</h1>
            </Sticky>
            <MarqueeSelection selection={this._selection}>
              <DetailsList
                items={items}
                columns={_columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.fixedColumns}
                constrainMode={ConstrainMode.unconstrained}
                onRenderDetailsHeader={onRenderDetailsHeader}
                onRenderDetailsFooter={onRenderDetailsFooter}
                selection={this._selection}
                selectionPreservedOnEmptyClick={true}
              />
            </MarqueeSelection>
          </ScrollablePane>
        </Fabric>
      </div>
    );
  }

  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();

    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as any).name;
      default:
        return `${selectionCount} items selected`;
    }
  }
}

function onRenderDetailsHeader(props: IDetailsHeaderProps, defaultRender?: IRenderFunction<IDetailsHeaderProps>): JSX.Element {
  return (
    <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced={true}>
      {defaultRender!({
        ...props,
        onRenderColumnHeaderTooltip: (tooltipHostProps: ITooltipHostProps) => <TooltipHost {...tooltipHostProps} />
      })}
    </Sticky>
  );
}

function onRenderDetailsFooter(props: IDetailsFooterProps, defaultRender?: IRenderFunction<IDetailsFooterProps>): JSX.Element {
  return (
    <Sticky stickyPosition={StickyPositionType.Footer} isScrollSynced={true}>
      <div style={{ display: 'inline-block' }}>
        <DetailsRow
          columns={props.columns}
          item={{
            key: 'footer',
            test1: 'Total 1',
            test2: 'Total 2',
            test3: 'Total 3',
            test4: 'Total 4',
            test5: 'Total 5',
            test6: 'Total 6'
          }}
          itemIndex={-1}
          selection={props.selection}
          selectionMode={(props.selection && props.selection.mode) || SelectionMode.none}
          viewport={props.viewport}
        />
      </div>
    </Sticky>
  );
}

function hasText(item: IItem, text: string): boolean {
  return `${item.test1}|${item.test2}|${item.test3}|${item.test4}|${item.test5}|${item.test6}`.indexOf(text) > -1;
}

storiesOf('ScrollablePane Details List', module)
  .addDecorator(FabricDecorator)
  .addDecorator(story => (
    <Screener
      steps={new Screener.Steps()
        .snapshot('default', { cropTo: '.testWrapper' })
        .executeScript("document.getElementsByClassName('ms-ScrollablePane--contentContainer')[0].scrollTop = 2")
        .snapshot('scroll down by a small amount so that the first row is still visible', { cropTo: '.testWrapper' })
        .executeScript("document.getElementsByClassName('ms-ScrollablePane--contentContainer')[0].scrollTop = 99999")
        .snapshot('scroll down to the bottom', { cropTo: '.testWrapper' })
        .executeScript("document.getElementsByClassName('ms-ScrollablePane--contentContainer')[0].scrollTop = 0")
        .snapshot('scroll up to the top', { cropTo: '.testWrapper' })
        .end()}
    >
      {story()}
    </Screener>
  ))
  .addStory('ScrollablePane Details List with sticky header & footer', () => (
    <ScrollablePaneDetailsListStory />
  ));
