import pkg from '../package.json'

const styles = [
  'background: linear-gradient(#2F3439, #2B3F52)',
  'color: white',
  'line-height: 20px'
]

console.log(`%c Site Version: ${pkg.version} `, styles.join(';')) // eslint-disable-line
