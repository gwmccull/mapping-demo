import React from 'react';
import { cleanup } from '@testing-library/react'
import { render, fireEvent, screen } from '../assets/test-utils'
import { useSelector, useDispatch } from 'react-redux'
import Home from './Home'

afterEach(cleanup)

// jest.mock('react-redux', () => ({
//   useDispatch: jest.fn(() => {}),
//   useSelector: jest.fn(),
// }));

// describe('Home', () => {
//   it('renders an unchanged snapshot', ()=> {
//     const { container } = render(<Home title="My Title" />)
//     expect(container).toMatchSnapshot()
//   })
// })



// import React from 'react'
// import renderer from 'react-test-renderer'
// import { useSelector, useDispatch } from 'react-redux'
// import Home from './Home'

// describe('Home', () => {
//     jest.mock("react-redux", () => ({
//         useSelector: jest.fn(),
//         useDispatch: jest.fn()
//     }));
    
//     const mockUseSelector = useSelector as jest.Mock;
//     const mockUseDispatch = useDispatch as jest.Mock;
//     const mockDispatch = jest.fn();

//     mockUseDispatch.mockImplementation(() => mockDispatch);
//     mockUseSelector.mockImplementation(callback =>
//         callback({ thing: "this is our thing" })
//     );

//     describe("useThing hook", () => {
//         it("calls dispatch and retrieves our thing", () => {
//           mockUseDispatch.mockImplementation(() => mockDispatch);
//           mockUseSelector.mockImplementation(
//             callback => callback({ thing: "this is our thing" }) // This is our mocked state.
//           );
      
//           const { result } = renderHook(() => useThing()); // Call our hook.
      
//           expect(result.current).toBe("this is our thing"); // Make sure hook returns our slice of state.
//           expect(mockDispatch).toHaveBeenCalledWith(getThingsStart()); // Make sure the right action was dispatched.
//         });
//       });

//   it('renders correctly', () => {
//     const tree = renderer
//       .create(<Home title="Title"/>)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// })