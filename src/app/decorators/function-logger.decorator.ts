export function MethodLogger(
    target: Object, // The prototype of the class
    propertyKey: string, // The name of the method
    descriptor: TypedPropertyDescriptor<any>
) {
    console.log('MethodDecorator called on: ', target, propertyKey, descriptor);
}
