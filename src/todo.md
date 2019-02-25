### Test examples
- [x] simple action `src/store/__tests__/actions-test.js`
- [x] thunk action `src/store/__tests__/actions-test.js`
- [x] reducer `src/store/__tests__/simpleReducer-test.js`
- [x] selector `src/selectors/__tests__/selectors-test.js`
- [x] saga `src/modules/__tests__/saga-test.js`
- [x] function with external dependencies (jest.spyOn) `src/modules/__tests__/logic-test.js`
- [x] function with external dependencies (jest.mock, so called es6 mocks) `src/modules/__tests__/logic-test.js`
- [x] function with timers `src/modules/__tests__/logic-test.js`
- [x] function with global flag `src/modules/__tests__/logic-test.js`
- [x] simple component `src/components/__tests__/simple-test.js`
- [x] component with prop: different layout depends on prop `src/components/__tests__/simpleWithCondition-test.js`
- [x] component with render prop `src/components/__tests__/simpleRenderProp-test.js`
- [x] component in component `src/components/__tests__/complexRenderProp-test.js`
- [x] connected component `src/components/__tests__/connected-test.js`
- [ ] component with DOM logic
- [ ] component's lifecycle methods (use setProps for componentWillReceiveProps)
- [ ] components with refs
- [ ] component with state
- [ ] etc...

// alebedev comments:
async actions at thunk - example
async actions at saga - example

суелекторы: при одинаковых входных данных - одинаковый результат. И чтоб не вызывался лишний раз если возможно такой тест сделать

externalDependency - дописать коммент откуда взялось слово external

Мы проверяем, что если callback пустой - то не падает в функции которая это обрабатывает или имеет дефолт.
Нужна проверка что функция без такой обработки упадет.

Аналогично с компонентами и пропсами (или просто дописать что такие тесты автоматом падают)

callRenderProp - описать входные параметры

про не вполне стандартный шаблонизатор снапшотов - упомянуть где-ниб

renderShallow - убрать кузьмичества

factory selectorov - придумать что с этим делать
