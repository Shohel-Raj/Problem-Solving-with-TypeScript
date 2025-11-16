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


function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;             
  }

  if (Array.isArray(value)) {
    return value.length;             
  }

  const never: never = value;       
  return never;
}



class Person {
  

  constructor(public name: string, public age: number) {

  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;  
  }
}



interface Item {
  title: string;
  rating: number; 
}

function filterByRating(items: Item[]): Item[] {
  return items.filter(item => item.rating >= 4);
}


