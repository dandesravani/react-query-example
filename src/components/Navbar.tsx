import React from 'react'

export type Page = 'planets' | 'people'

interface handleNavbarProps {
  selected: Page
  onPageChange(page: Page): void
}

export const Navbar = ({ onPageChange, selected }: handleNavbarProps) => {
  return (
    <nav>
      <button
        onClick={() => onPageChange('planets')}
        style={selected === 'planets' ? { borderColor: '#ffff57' } : undefined}
      >
        Planets
      </button>
      <button
        onClick={() => onPageChange('people')}
        style={selected === 'people' ? { borderColor: '#ffff57' } : undefined}
      >
        People
      </button>
    </nav>
  )
}
