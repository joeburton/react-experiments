import React from 'react'
import FilterLinks from './FilterLinks'
import FilterLink from '../containers/FilterLink'
import { createRenderer } from 'react-test-renderer/shallow';

const setup = () => {
    const props = {
    }
      
    const renderer = createRenderer()

    renderer.render(
        <FilterLinks {...props} />
    )

    const output = renderer.getRenderOutput()

    return {
        props: props,
        output: output,
        renderer: renderer
    }
}

describe('components', () => {
    describe('FilterLinks', () => {
        it('should render correctly', () => {
            const { output } = setup()

            expect(output.type).toBe('section')
            expect(output.props.className).toBe('filter-links')

            const [span, href] = output.props.children
            // console.log(href);

            expect(span.type).toBe('span')
            expect(span.props.children).toBe('Show:')

            expect(href.type).toBe(FilterLink)
            expect(href.props.filter).toBe('SHOW_ALL')
        })

        xit('should call addTodo if length of text is greater than 0', () => {
            const { output, props } = setup()
            const input = output.props.children[1]
            input.props.onSave('')
            expect(props.addTodo).not.toBeCalled()
            input.props.onSave('Use Redux')
            expect(props.addTodo).toBeCalled()
        })
    })
})
