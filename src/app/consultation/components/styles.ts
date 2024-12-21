export const formStyles = {
  section: "space-y-8 max-w-4xl mx-auto",
  
  header: {
    wrapper: "text-center mb-10",
    title: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",
    description: "mt-2 text-lg leading-8 text-gray-600"
  },
  
  field: {
    wrapper: "space-y-6 w-full",
    label: "block text-sm font-medium leading-6 text-gray-900",
    input: `
      mt-2 block w-full rounded-md border-0 px-4 py-3
      text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
      placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary
      sm:text-sm sm:leading-6
    `,
    textarea: `
      mt-2 block w-full rounded-md border-0 px-4 py-3
      text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
      placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary
      sm:text-sm sm:leading-6 min-h-[120px] resize-y
    `,
    select: `
      mt-2 block w-full rounded-md border-0 px-4 py-3
      text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
      focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6
    `,
    error: "mt-2 text-sm text-red-600"
  },
  
  grid: {
    cols: {
      '2': 'grid grid-cols-1 gap-4 sm:grid-cols-2',
      '3': 'grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3',
      '4': 'grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4'
    }
  },
  
  button: {
    base: "inline-flex items-center px-6 py-3 rounded-md text-sm font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary: "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:ring-primary"
  },
  
  card: {
    base: `
      relative p-6 rounded-lg
      transition-all duration-300
      hover:shadow-md
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
    `,
    selected: 'border-primary bg-primary/5 ring-2 ring-primary/20',
    unselected: 'border border-gray-200 hover:border-primary/50',
    icon: {
      base: 'flex-shrink-0 transition-all duration-300',
      selected: 'text-primary',
      unselected: 'text-gray-400 group-hover:text-gray-500'
    }
  }
}; 