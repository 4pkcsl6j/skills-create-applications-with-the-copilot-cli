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

module.exports = { add, subtract, multiply, divide };

// CLI implementation
if (require.main === module) {
  const [, , op, aRaw, bRaw] = process.argv;

  function usage() {
    console.error('Usage: node src/calculator.js <add|subtract|multiply|divide> <num1> <num2>');
    process.exit(1);
  }

  if (!op || aRaw === undefined || bRaw === undefined) {
    usage();
  }

  try {
    const a = toNumber(aRaw);
    const b = toNumber(bRaw);
    let result;

    switch (op.toLowerCase()) {
      case 'add':
      case '+':
        result = add(a, b);
        break;
      case 'subtract':
      case '-':
        result = subtract(a, b);
        break;
      case 'multiply':
      case 'x':
      case '*':
        result = multiply(a, b);
        break;
      case 'divide':
      case '/':
        result = divide(a, b);
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
