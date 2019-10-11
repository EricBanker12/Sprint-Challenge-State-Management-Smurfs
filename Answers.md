- [x] What problem does the context API help solve?

   Context API solves the need to share data/state to distant children without needing to pass the data as props at each intermediate parent-child.

- [x] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   `Actions` are desciptions of an event occurance sent to a `reducer` when an event happens.
   
   `Reducers` are pure functions that act in a specific and predictable way returning a new `store` updated in response to a specific `action`.
   
   `Store` is data describing the state of the whole application that gets updated by the reducer and used by the application at every level.
   
   `Store` is the 'single source of truth' because it holds information for the state of the whole application, shared to many components.

- [x] What is the difference between Application state and Component state? When would be a good time to use one over the other?

   Application state is the state of the whole application affecting multiple components, but component state only has data for one component instance.

   Use Application state for things shared to multiple components such as data from a search. Use component state for things that never leave the component such as current input into a search form before submitting.

- [x] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   `Redux-thunk` is middleware that intercepts dispatch if given a function, an `action creator`, and provides said function dispatch access which allows for conditionally sending `actions` and asyncronous logic in `action-creators`.

- [x] What is your favorite state management system you've learned and this sprint? Please explain why!

   My favorite state management is context API. I like that it is simplistic and built into react already. The only benefit redux has over context is selecting store properties instead of loading the entire store, but this is not an issue until store has several hundred properties.