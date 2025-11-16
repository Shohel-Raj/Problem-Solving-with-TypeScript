# TypeScript Learning: Solutions & Blog Post

## Blog Post (Bangla)

### 1. TypeScript-এ Interface এবং Type এর মধ্যে পার্থক্য

TypeScript-এ আমরা interface এবং type alias ব্যবহার করি অবজেক্ট, ফাংশন, বা কম্প্লেক্স টাইপ ডিফাইন করার জন্য। তবে, এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে। 

  1.1 **Interface:**  
   - মূলত অবজেক্টের shape বা structure নির্ধারণের জন্য ব্যবহৃত হয়।
   - আমরা একাধিক interface extend করতে পারি এবং নতুন প্রোপার্টি যোগ করতে পারি।
   - শুধু অবজেক্ট টাইপ নয়, ফাংশন বা class-এর জন্যও interface ব্যবহার করা যায়। 

```ts
interface Person {
  name: string;
  age: number;
}
interface Employee extends Person {
  salary: number;
}
```
  1.2 **Type alias::**  
   - কেবল অবজেক্ট নয়, আমরা primitive, union, intersection, tuple টাইপের জন্য type alias ব্যবহার করতে পারি।
   - একবার type declare করলে পরবর্তীতে extend করা যায় না (interface-এর মতো)।
   

```ts
type ID = string | number;
type EmployeeType = Person & { salary: number }; // intersection type

```


### 2.TypeScript-এ keyof কীওয়ার্ডের ব্যবহার

keyof একটি TypeScript keyword, যা একটি অবজেক্টের সব key-এর union টাইপ বের করে। এটি টাইপ সেফটি এবং ডাইনামিক প্রোপার্টি এক্সেসের জন্য খুবই কাজে লাগে।

```ts
interface Person {
  name: string;
  age: number;
  email: string;
}

type PersonKeys = keyof Person; 

function getValue(obj: Person, key: PersonKeys) {
  return obj[key];
}

const p: Person = { name: "Rakib", age: 25, email: "rakib@example.com" };
const value = getValue(p, "email"); 

```

**ব্যাখ্যা::**  
  - keyof Person → "name" | "age" | "email"
   - getValue ফাংশন নিশ্চিত করে যে শুধু অবজেক্টের প্রাপ্য প্রোপার্টি ব্যবহার করা হবে।
   - ভুল key দিলে TypeScript compile-time error দেখাবে।

