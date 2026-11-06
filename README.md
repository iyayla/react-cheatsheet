# React Cheat Sheet

## useEffect

Dependency verilmez ise her render da tekrar çalışır. Boş array de sadece ilk çalıştığında çalışır.


```tsx
  useEffect(() => {
    console.log("StateManagement component mounted"); 

  }, []);
```

```tsx
  useEffect(() => {
    console.log("StateManagement component mounted"); 

  },);
```

## useMemo
```tsx
  // Hesaplama sonucunu saklar
  const result = useMemo(() => count * 2, [count]);

  // Fonksiyon referansını saklar
  const handleClick = useCallback(() => {
    console.log(count);
  }, [count]);
```

## TypeScript

### Different Uses

```tsx
interface AddProps {
    a: number;
    b: number
}

function AddNumbers(props: AddProps){
    console.log(props.a + props.b)
}

function AddNumbers2({a,b}: AddProps){
    console.log(a+b)
}

function AddNumbers3(a:number, b: number){
    console.log(a+b)
}

console.log(AddNumbers({a: 4, b: 3}))
console.log(AddNumbers2({a: 4, b: 3}))
console.log(AddNumbers3(4,3))

```
### Generic Types
```tsx
type ArrType<T>{
    name: T
}

let arr: ArrType<string> = {
    name: "test"
}

let arr2: ArrType<number> = {
    name: 10
}
```

## Notes
* [Fakestoreapi.com](https://fakestoreapi.com/docs)
* npm create vite@latest