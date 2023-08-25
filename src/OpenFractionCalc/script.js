const calculate = document.getElementById('calculate');
      const fraction1 = document.getElementById('fraction1');
      const fraction2 = document.getElementById('fraction2');
      const action = document.getElementById('action');
      const result = document.getElementById('result');

      calculate.addEventListener('click', () => {
        const fraction1Parts = fraction1.value.split('/');
        const fraction2Parts = fraction2.value.split('/');

        const fraction1Numerator = parseInt(fraction1Parts[0]);
        const fraction1Denominator = parseInt(fraction1Parts[1]);
        const fraction2Numerator = parseInt(fraction2Parts[0]);
        const fraction2Denominator = parseInt(fraction2Parts[1]);

        let numerator;
        let denominator;

        if (action.value === 'add') {
          numerator = fraction1Numerator * fraction2Denominator + fraction2Numerator * fraction1Denominator;
          denominator = fraction1Denominator * fraction2Denominator;
        } else if (action.value === 'subtract') {
          numerator = fraction1Numerator * fraction2Denominator - fraction2Numerator * fraction1Denominator;
          denominator = fraction1Denominator * fraction2Denominator;
        } else if (action.value === 'multiply') {
          numerator = fraction1Numerator * fraction2Numerator;
          denominator = fraction1Denominator * fraction2Denominator;
        } else if (action.value === 'divide') {
          numerator = fraction1Numerator * fraction2Denominator;
          denominator = fraction1Denominator * fraction2Numerator;
        } else if (action.value === 'exponent') {
          numerator = Math.pow(fraction1Numerator, fraction2Numerator)
          denominator = Math.pow(fraction1Denominator, fraction2Denominator)
        } else if (action.value === 'squareRoot') {
          numerator = Math.sqrt(fraction1Numerator);
          denominator = Math.sqrt(fraction1Denominator);
        } else if (action.value === "fd") {
          numerator = fraction1Numerator / fraction1Denominator
          denominator = null
        } else if (action.value === "round") {
          numerator = Math.round(fraction1Numerator)
          denominator = Math.round(fraction1Denominator)
        } else if (action.value === "floor") {
          numerator = Math.floor(fraction1Numerator)
          denominator = Math.floor(fraction1Denominator)
        } else if (action.value === "ceil") {
          numerator = Math.ceil(fraction1Numerator)
          denominator = Math.ceil(fraction1Denominator)
        }
        
        if (denominator !== null) {
          const gcd = (a, b) => b ? gcd(b, a % b) : a;
          const greatestCommonDivisor = gcd(numerator, denominator);
          numerator /= greatestCommonDivisor;
          denominator /= greatestCommonDivisor;

          if (denominator === 1) {
            result.innerHTML = `Result: ${numerator}`;
          } else {
            result.innerHTML = `Result: ${numerator}/${denominator}`;
          }
        } else {
          result.innerHTML = `Result: ${numerator}`;
        }
      });