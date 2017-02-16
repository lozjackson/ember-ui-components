# Change Log

* [#28](https://github.com/lozjackson/ember-ui-components/pull/28) Fix Ember version compatibility.

* [#27](https://github.com/lozjackson/ember-ui-components/pull/27) Remove observer from `SlideMenuComponent`.

* [#26](https://github.com/lozjackson/ember-ui-components/pull/26) Add `AlertHelper` and `ConfirmHelper`.

* [#25](https://github.com/lozjackson/ember-ui-components/pull/25) Remove observer from `ModalDialogComponent`.

* [#24](https://github.com/lozjackson/ember-ui-components/pull/24) Remove observer from `TabsComponent`.

### v0.11.1 2017-01-25

* [#23](https://github.com/lozjackson/ember-ui-components/pull/23) Update Ember-svg-shapes to `^1.0.0`

* [#22](https://github.com/lozjackson/ember-ui-components/pull/22) Update to Ember-cli 2.11.0




### v0.11.0 2017-01-01

* [#19](https://github.com/lozjackson/ember-ui-components/pull/19) [FEATURE] Add `ListComponent`.

* [#18](https://github.com/lozjackson/ember-ui-components/pull/18) [FEATURE] Add `SwitchComponent`.

* [#15](https://github.com/lozjackson/ember-ui-components/pull/15) [BUGFIX] Prevent active tab becoming blank

* [#14](https://github.com/lozjackson/ember-ui-components/pull/14) Remove deprecated Ember.K




### v0.10.0 2016-11-21

* [#11](https://github.com/lozjackson/ember-ui-components/pull/11) [BUGFIX] The `SubMenuComponent` now supports the `disabled` attribute.

* [#10](https://github.com/lozjackson/ember-ui-components/pull/10) [FEATURE] Add `TabsComponent`.

* [#12](https://github.com/lozjackson/ember-ui-components/pull/12) Update Ember-wormhole dependency to v0.5.1




### v0.9.2 2016-11-06

* [#6](https://github.com/lozjackson/ember-ui-components/pull/6) Add util methods.

* [#7](https://github.com/lozjackson/ember-ui-components/pull/7) Update to Ember-cli 2.8.0




### v0.9.1 2016-09-03

* [BUGFIX] Fix issue that was preventing the consuming app to build for production environment.




### v0.9.0 2016-09-03

* [BUGFIX] Check the component still exists before handling event listeners on the `ClickOutsideMixin`.

* [FEATURE] Add `InputComponent`.

* [FEATURE] Add `FormElementComponent` and `FormElementClass`.

* [FEATURE] Add `FieldsetComponent` and `FieldsetClass`.

* Add the `FormElementClass` to the `SelectComponent`.

* Add Phantomjs dev-dependency.

* Configure Ember-try to include Ember ~2.4.0 (LTS).

* Update to Ember-cli 2.7.0




### v0.8.1 2016-08-17

* When button components become active the css box-shadow is inset.

* Change the OK button for alert and confirm modal dialog components to blue background with white text.

* Use ButtonComponent instead of button elements in the built in model dialog components.




### v0.8.0 2016-06-18

* [FEATURE] Use ember-wormhole to enable rendering the `ContextMenuComponent` to a specified DOM element.

* [FEATURE] Use ember-wormhole to enable rendering the `ModalWindowComponent` to a specified DOM element.

* Add `DestinationElementMixin`.

* Add ember-wormhole dependency.




### v0.7.0 2016-06-08

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
