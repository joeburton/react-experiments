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

            expect(span.type).toBe('span')
            expect(span.props.children).toBe('Show:')

            expect(href.type).toBe(FilterLink)
            expect(href.props.filter).toBe('SHOW_ALL')
        })

    })
})
