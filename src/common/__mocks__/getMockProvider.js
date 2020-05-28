import React from "react"
import configureStore from "redux-mock-store"
// import { mergeDeepRight } from "ramda"
// import { MockApplicationState } from "./MockApplicationState"

export const getMockProvider = () => {
    return configureStore()
}
// export const getMockProvider = (partialState: Partial<ApplicationState>) => {
//   const mockStore: any = configureStore();
//   const store: any = mockStore(
//     mergeDeepRight(MockApplicationState, partialState)
//   )

//   return {
//     MockProvider: ({ children }: { children: React.ReactNode }) => (
//       <Provider store={store}>{children}</Provider>
//     ),
//     store
//   }
// }