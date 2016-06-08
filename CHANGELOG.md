# Change Log

### v0.7.0

* [FEATURE] Add `ModalService`.

* [FEATURE] Add `open-modal` and `close-modal` helpers.

* [FEATURE] Add `showModal` property to `ModalWindowComponent`.

* Bind the `uic-modal-container` class name to the `showModal` property of the `ModalWindowComponent`.

* Add ember-code-snippet.




### v0.6.0 2016-05-23

* [FEATURE] Add `toggle` method to the `ContextMenuService`.

* [BUGFIX] Fix a bug where the context-menu could have an incorrect context.

* [FEATURE] Allow an object to be passed as a second argument to the `OpenContextMenuHelper`
and then be available as the `ContextMenuParams.model` property.




### v0.5.1 2016-05-21

* [BUGFIX] Prevent Firefox from scrolling the page when using the `ContextMenuComponent`.




### v0.5.0 2016-05-20

* [FEATURE] Add `OpenContextMenuHelper`

* [FEATURE] Add `ContextMenuService`.

* Change the default `tagName` for `SubMenuComponent` to `menuitem`.

* Add `ContextMenuContainerComponent`.

* Update `ContextMenuComponent`




### v0.4.0 2016-04-28

* [FEATURE] Add `CloseButtonComponent`

* [FEATURE] Add `AutoClose` property to `DropdownComponent` and `DropdownContainerComponent`




### v0.3.0 2016-04-04

* [FEATURE] Add `ButtonGroupComponent`

* [FEATURE] Add `selected` property to `ButtonComponent`




### v0.2.0 2016-03-30

* [FEATURE] Add `ButtonComponent`

* [FEATURE] Add `DropdownComponent`

* [FEATURE] Add `ClickOutsideMixin`




### v0.1.0 2016-03-25

* [FEATURE] Add `menuToggleClass` property to `SlideMenuComponent`

* [FEATURE] Add `pushContentType` property to `SlideMenuComponent`

* [FEATURE] Add `squeeze-content` css class for the `SlideMenuComponent`

* [FEATURE] Add `maskContent` option to `ModalDialogComponent` and `ModalWindowComponent`

* [FEATURE] Add `disableScroll` option to `ModalDialogComponent`, `ModalWindowComponent` and `SlideMenuComponent`

* [FEATURE] Add `disablePointerEvents` option to `ModalDialogComponent` and `ModalWindowComponent`

* [FEATURE] Update `uic-button` css class

* [FEATURE] Update `uic-modal` template

* [BUGFIX] Fix error when calling the `DialogService.closeModal()` method when the modal dialog is not open.

* Update to Ember-cli 2.4.2




### v0.0.1 2016-03-19

* Initial release.
