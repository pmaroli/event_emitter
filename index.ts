let handlers: { [key: string]: Function[] } = {}

const trigger = (type: string, ...args: any) => {
  handlers[type].forEach((handler) => {
    handler(...args)
  })
}

const on = (type: string, handler: Function) => {
  if (type in handlers) {
    handlers[type].push(handler)
  } else {
    handlers[type] = [handler]
  }
}

/** Removes a handler (does not work for anonymous functions) */
const off = (type: string, handler: Function) => {
  if (!(type in handlers)) {
    throw Error(`type: ${type} not found in handlers`)
  }

  handlers[type] = handlers[type].filter((curHandler) => {
    return curHandler !== handler
  })
}

// Handler definitions
const onBar = () => {
  console.log('Do foo')
}

// 1. Adding multiple handlers
on('foo', () => {
  console.log('Do foo')
})
on('foo', () => {
  console.log('Do some other foo')
})
console.info('Testing case 1: Multiple handlers')
trigger('foo') // 'Do foo' & 'Do some other foo'

// 2. Adding an off method
on('bar', onBar)
off('bar', onBar)
console.info('Testing case 2: Off Method')
trigger('bar') // No output

// 3. Passing arbitrary arguments
on('baz', (arg1: string, arg2: string) => {
  console.log(`here are my args: ${arg1}, ${arg2}`)
})
on('baz', () => {
  console.log(`There are no args here`)
})
console.info('Testing case 3: Passing arbitrary arguments')
trigger('baz', 'firstArg', 'secondArg')
