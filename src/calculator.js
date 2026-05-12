#!/usr/bin/env node
/**
 * src/calculator.js
 *
 * Supports operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 *
 * Exports functions: add, subtract, multiply, divide
 * Also provides a simple CLI: node src/calculator.js <op> <num1> <num2>
 */

// Convert input to number and validate
function toNumber(value) {
  const n = Number(value);
  if (Number.isNaN(n)) {
    throw new Error(`Invalid number: ${value}`);
  }
  return n;
}

// addition: returns a + b
function add(a, b) {
  return a + b;
}

// subtraction: returns a - b
function subtract(a, b) {
  return a - b;
}

// multiplication: returns a * b
function multiply(a, b) {
  return a * b;
}

// division: returns a / b, throws on division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

// additional operations

// modulo: returns a % b, throws on modulo by zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

// power: returns a ** b
function power(a, b) {
  return Math.pow(a, b);
}

// sqrt: returns Math.sqrt(a), throws on negative input
function sqrt(a) {
  if (a < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(a);
}

module.exports = { add, subtract, multiply, divide, modulo, power, sqrt };

// CLI implementation
if (require.main === module) {
  const [, , op, aRaw, bRaw] = process.argv;

  function usage() {
    console.error('Usage: node src/calculator.js <add|subtract|multiply|divide|modulo|power|sqrt> <num1> [num2]');
    process.exit(1);
  }

  if (!op || aRaw === undefined) {
    usage();
  }

  try {
    const a = toNumber(aRaw);
    const b = bRaw !== undefined ? toNumber(bRaw) : undefined;
    let result;

    switch (op.toLowerCase()) {
      case 'add':
      case '+':
        if (b === undefined) usage();
        result = add(a, b);
        break;
      case 'subtract':
      case '-':
        if (b === undefined) usage();
        result = subtract(a, b);
        break;
      case 'multiply':
      case 'x':
      case '*':
        if (b === undefined) usage();
        result = multiply(a, b);
        break;
      case 'divide':
      case '/':
        if (b === undefined) usage();
        result = divide(a, b);
        break;
      case 'modulo':
      case 'mod':
      case '%':
        if (b === undefined) usage();
        result = modulo(a, b);
        break;
      case 'power':
      case 'pow':
      case '^':
      case 'exp':
        if (b === undefined) usage();
        result = power(a, b);
        break;
      case 'sqrt':
      case 'root':
        result = sqrt(a);
        break;
      default:
        console.error(`Unknown operation: ${op}`);
        usage();
    }

    // Print result (use full precision for floats)
    console.log(result);
    process.exit(0);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(2);
  }
}
