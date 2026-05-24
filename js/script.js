document.getElementById("checkBtn").addEventListener("click", function () {


    let code = document.getElementById("codeInput").value;
    let n = parseInt(code);

    let storesResult = document.getElementById("result");
    if (isNaN(n) || n < 10000000) {
        storesResult.innerHTML = "<p style='color: red;'>Por favor, ingresa un número entero con al menos 8 cifras y mayor a 10000000.</p>";
        return;
    }


    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        // Generamos un token aleatorio de 4 dígitos para simular un pase bancario seguro
        let tokenSesion = Math.floor(Math.random() * 9000) + 1000;

        // Obtenemos la hora actual del sistema
        let horaActual = new Date().toLocaleTimeString();

        // En lugar de un texto plano, inyectamos bloques visuales en el HTML
        storesResult.innerHTML = `
    <div style="background-color: #e8f8f5; border-left: 5px solid #2ecc71; padding: 15px; border-radius: 5px;">
        <h4 style="color: #27ae60; margin-bottom: 5px;">🔓 ¡ACCESO CONCEDIDO!</h4>
        <p>El código <strong>${n}</strong> cumple con los protocolos criptográficos de números primos.</p>
        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #d1f2eb;">
        <p style="font-size: 0.9rem; color: #555;">
            <strong>Token de Seguridad de Sesión:</strong> TS-${tokenSesion}<br>
            <strong>Hora de ingreso registrada:</strong> ${horaActual}
        </p>
    </div>
`;
    } else {
        // 1. Find 3 suggested prime numbers greater than the user's input
        let suggestions = [];
        let possiblePrime = n + 1; // Start searching right above the incorrect number

        while (suggestions.length < 3) {
            
            // Reuse the same validation logic for the "possiblePrime"
            let isSuggestedPrime = true;
            for (let j = 2; j <= Math.sqrt(possiblePrime); j++) {
                if (possiblePrime % j === 0) {
                    isSuggestedPrime = false;
                    break; // Not a prime, break this internal loop
                }
            }

            // If it passes the test, save it in our suggestions list
            if (isSuggestedPrime) {
                suggestions.push(possiblePrime);
            }

            possiblePrime++; // Move to the next number to keep searching
        }

        // 2. Build the table rows with the 3 primes found
        let tableRows = "";
        for (let k = 0; k < suggestions.length; k++) {
            tableRows += `
                <tr>
                    <td style="padding: 8px; border: 1px solid #ccc;">Sugerencia ${k + 1}</td>
                    <td style="padding: 8px; border: 1px solid #ccc; font-weight: bold; color: #1e4886;">
                        ${suggestions[k]}
                    </td>
                </tr>
            `;
        }

        // 3. Inject the error message along with the suggestions table into the HTML
        storesResult.innerHTML = `
            <div style="background-color: #fce4d6; border-left: 5px solid #e74c3c; padding: 15px; border-radius: 5px;">
                <h4 style="color: #c0392b; margin-bottom: 5px;">❌ ACCESO DENEGADO</h4>
                <p>El código <strong>${n}</strong> no es un número primo seguro.</p>
                
                <h5 style="margin-top: 15px; color: #333;">💡 Códigos de acceso seguros sugeridos:</h5>
                <table style="width: 100%; margin-top: 10px; border-collapse: collapse; text-align: center; background-color: #fff;">
                    <thead>
                        <tr style="background-color: #f0f0f0;">
                            <th style="padding: 8px; border: 1px solid #ccc;">Tipo</th>
                            <th style="padding: 8px; border: 1px solid #ccc;">Código Válido</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
        `;
    }
 
});