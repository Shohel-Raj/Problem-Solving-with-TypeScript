function formatValue(value: string | number | boolean): string | number | boolean {
  switch (typeof value) {                
    case "string":                        
      return value.toUpperCase();         
    case "number":                        
      return value * 10;                
    case "boolean":                       
      return !value;                      
    default:
      const check: never = value;        // This should never happen (type safety)
      return check;                      // Forces TypeScript to ensure all cases handled
  }
}
