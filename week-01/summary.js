const testCases = [
  { id: "TC-001", title: "Login válido", priority: "high", status: "passed" },
  { id: "TC-002", title: "Login con contraseña incorrecta", priority: "high", status: "passed" },
  { id: "TC-003", title: "Recuperar contraseña", priority: "medium", status: "failed" },
  { id: "TC-004", title: "Agregar producto al carrito", priority: "high", status: "passed" },
  { id: "TC-005", title: "Eliminar producto del carrito", priority: "medium", status: "passed" },
  { id: "TC-006", title: "Checkout con tarjeta válida", priority: "high", status: "failed" },
  { id: "TC-007", title: "Checkout con cupón", priority: "medium", status: "blocked" },
  { id: "TC-008", title: "Cambiar idioma", priority: "low", status: "passed" },
  { id: "TC-009", title: "Filtrar productos por precio", priority: "low", status: "failed" },
  { id: "TC-010", title: "Cerrar sesión", priority: "medium", status: "passed" },
];

console.log(testCases.length);
console.log(testCases[0].title);
console.log(testCases[5].status);

const passedTests = testCases.filter((tc) => tc.status === "passed");
console.log(`Passed: ${passedTests.length}`);

const failedTests = testCases.filter((tc) => tc.status === "failed");
console.log(`Failed: ${failedTests.length}`);

const blockedTests = testCases.filter((tc) => tc.status === "blocked");
console.log(`Blocked: ${blockedTests.length}`);

console.log(passedTests.length + failedTests.length + blockedTests.length === testCases.length);