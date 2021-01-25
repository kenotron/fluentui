import * as React from 'react';
import { IBaseFloatingSuggestionsProps, IBaseFloatingPickerHeaderFooterProps } from '../../../FloatingSuggestionsComposite/FloatingSuggestions.types';
import { IFloatingSuggestionItemProps } from '../../../FloatingSuggestionsComposite/FloatingSuggestionsItem/FloatingSuggestionsItem.types';
import { EditingItemComponentProps } from '../EditableItem';
export interface IDefaultEditingItemInnerProps<TItem> extends React.HTMLAttributes<any> {
    /**
     * The current item of the EditingItem
     */
    item: TItem;
    /**
     * Callback for when the edited item's new value has been selected.
     * Invoked indirectly by the picker mounted by onRenderFloatingPicker.
     */
    onEditingComplete: (oldItem: TItem, newItem: TItem) => void;
    /**
     * Callback for when the FloatingSuggestions is dismissed
     */
    onDismiss?: () => void;
    /**
     * Renders the floating suggestions for suggesting the result of the item edit.
     *
     * Not actually optional, since is what is needed to resolve the new item.
     */
    onRenderFloatingPicker?: React.ComponentType<EditingItemInnerFloatingPickerProps<TItem>>;
    /**
     * Callback for when the editing item removes the item from the well
     *
     * Called when the item is currently being edited and the text length goes to zero
     */
    onRemoveItem?: (item: TItem) => void;
    /**
     * Callback used by the EditingItem to populate the initial value of the editing item
     */
    getEditingItemText: (item: TItem) => string;
    /**
     * Callback used to retrieve the suggestions to show in the floating suggestions
     */
    getSuggestions: (value: string) => IFloatingSuggestionItemProps<TItem>[];
    /**
     * The header and footer props for the floating picker
     * This should be set here instead of in onRenderFloatingPicker if you want them to be keyboard selectable
     */
    pickerSuggestionsProps?: IBaseFloatingPickerHeaderFooterProps;
    /**
     * Function that specifies how arbitrary text entered into the edit input is handled.
     */
    createGenericItem?: (input: string) => TItem;
}
export declare type EditingItemInnerFloatingPickerProps<T> = Pick<IBaseFloatingSuggestionsProps<T>, 'componentRef' | 'suggestions' | 'onSuggestionSelected' | 'targetElement' | 'onRemoveSuggestion' | 'onFloatingSuggestionsDismiss' | 'onKeyDown' | 'selectedSuggestionIndex' | 'selectedHeaderIndex' | 'selectedFooterIndex' | 'pickerSuggestionsProps'>;
/**
 * Wrapper around an item in a selection well that renders an item with a context menu for
 * replacing that item with another item.
 */
export declare const DefaultEditingItemInner: <TItem extends any>(props: IDefaultEditingItemInnerProps<TItem>) => JSX.Element;
export declare const DefaultEditingItem: <T extends any>(outerProps: Pick<IDefaultEditingItemInnerProps<T>, "style" | "title" | "children" | "color" | "hidden" | "className" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "placeholder" | "slot" | "spellCheck" | "tabIndex" | "inputMode" | "is" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "onRemoveItem" | "pickerSuggestionsProps" | "onRenderFloatingPicker" | "getEditingItemText" | "getSuggestions">) => (innerProps: EditingItemComponentProps<T>) => JSX.Element;
