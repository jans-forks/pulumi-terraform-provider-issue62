# How to reproduce:


`git checkout -b repro 48b457f2090084accee82fb7c3861417914ad23c`
`asdf install` - get pulumi and node
enable core pack and update asdf
```
corepack enable      
asdf reshim nodejs
```

Now in the root directory

`pulumi package add terraform-provider jianyuan/sentry -C pulumi/` - this creates the generated sentry sdk

`yarn add @pulumi/sentry@file:pulumi/sdks/sentry` - to link the SDK in the workspace
Observe error

<details>
<summary>error</summary>

```txt
# This file contains the result of Yarn building a package (sentry@file:pulumi/sdks/sentry#pulumi/sdks/sentry::hash=77b35b&locator=%40myorg%2Fjan-sandbox%40workspace%3A.)
# Script name: postinstall

Command failed: tsc: ../@types/glob/index.d.ts(29,42): error TS2694: Namespace '"/tmp/pulumi-terraform-provider-issue62/node_modules/minimatch/dist/commonjs/index"' has no exported member 'IOptions'.
../@types/glob/index.d.ts(75,30): error TS2724: '"/tmp/pulumi-terraform-provider-issue62/node_modules/minimatch/dist/commonjs/index"' has no exported member named 'IMinimatch'. Did you mean 'Minimatch'?
../@types/rimraf/index.d.ts(33,21): error TS2694: Namespace '"/tmp/pulumi-terraform-provider-issue62/node_modules/glob/dist/commonjs/index"' has no exported member 'IOptions'.
../lru-cache/dist/commonjs/index.d.ts(973,5): error TS2416: Property 'entries' in type 'LRUCache<K, V, FC>' is not assignable to the same property in base type 'Map<K, V>'.
  Type '() => Generator<[K, V], void, unknown>' is not assignable to type '() => MapIterator<[K, V]>'.
    Call signature return types 'Generator<[K, V], void, unknown>' and 'MapIterator<[K, V]>' are incompatible.
      The types returned by 'next(...)' are incompatible between these types.
        Type 'IteratorResult<[K, V], void>' is not assignable to type 'IteratorResult<[K, V], undefined>'.
          Type 'IteratorReturnResult<void>' is not assignable to type 'IteratorResult<[K, V], undefined>'.
            Type 'IteratorReturnResult<void>' is not assignable to type 'IteratorReturnResult<undefined>'.
              Type 'void' is not assignable to type 'undefined'.
../lru-cache/dist/commonjs/index.d.ts(985,5): error TS2416: Property 'keys' in type 'LRUCache<K, V, FC>' is not assignable to the same property in base type 'Map<K, V>'.
  Type '() => Generator<K, void, unknown>' is not assignable to type '() => MapIterator<K>'.
    Call signature return types 'Generator<K, void, unknown>' and 'MapIterator<K>' are incompatible.
      The types returned by 'next(...)' are incompatible between these types.
        Type 'IteratorResult<K, void>' is not assignable to type 'IteratorResult<K, undefined>'.
          Type 'IteratorReturnResult<void>' is not assignable to type 'IteratorResult<K, undefined>'.
            Type 'IteratorReturnResult<void>' is not assignable to type 'IteratorReturnResult<undefined>'.
              Type 'void' is not assignable to type 'undefined'.
../lru-cache/dist/commonjs/index.d.ts(997,5): error TS2416: Property 'values' in type 'LRUCache<K, V, FC>' is not assignable to the same property in base type 'Map<K, V>'.
  Type '() => Generator<V, void, unknown>' is not assignable to type '() => MapIterator<V>'.
    Call signature return types 'Generator<V, void, unknown>' and 'MapIterator<V>' are incompatible.
      The types returned by 'next(...)' are incompatible between these types.
        Type 'IteratorResult<V, void>' is not assignable to type 'IteratorResult<V, undefined>'.
          Type 'IteratorReturnResult<void>' is not assignable to type 'IteratorResult<V, undefined>'.
            Type 'IteratorReturnResult<void>' is not assignable to type 'IteratorReturnResult<undefined>'.
              Type 'void' is not assignable to type 'undefined'.
../lru-cache/dist/commonjs/index.d.ts(1009,5): error TS2416: Property '[Symbol.iterator]' in type 'LRUCache<K, V, FC>' is not assignable to the same property in base type 'Map<K, V>'.
  Type '() => Generator<[K, V], void, unknown>' is not assignable to type '() => MapIterator<[K, V]>'.
    Call signature return types 'Generator<[K, V], void, unknown>' and 'MapIterator<[K, V]>' are incompatible.
      The types returned by 'next(...)' are incompatible between these types.
        Type 'IteratorResult<[K, V], void>' is not assignable to type 'IteratorResult<[K, V], undefined>'.
          Type 'IteratorReturnResult<void>' is not assignable to type 'IteratorResult<[K, V], undefined>'.
            Type 'IteratorReturnResult<void>' is not assignable to type 'IteratorReturnResult<undefined>'.
              Type 'void' is not assignable to type 'undefined'.
../lru-cache/dist/commonjs/index.d.ts(1032,5): error TS2416: Property 'forEach' in type 'LRUCache<K, V, FC>' is not assignable to the same property in base type 'Map<K, V>'.
  Type '(fn: (v: V, k: K, self: LRUCache<K, V, FC>) => any, thisp?: any) => void' is not assignable to type '(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any) => void'.
    Types of parameters 'fn' and 'callbackfn' are incompatible.
      Types of parameters 'map' and 'self' are incompatible.
        Type 'LRUCache<K, V, FC>' is not assignable to type 'Map<K, V>'.
          The types returned by 'entries().next(...)' are incompatible between these types.
            Type 'IteratorResult<[K, V], void>' is not assignable to type 'IteratorResult<[K, V], undefined>'.
              Type 'IteratorReturnResult<void>' is not assignable to type 'IteratorResult<[K, V], undefined>'.
                Type 'IteratorReturnResult<void>' is not assignable to type 'IteratorReturnResult<undefined>'.
                  Type 'void' is not assignable to type 'undefined'.
```

</details>

Remove the package `yarn remove @pulumi/sentry`

update `pulumi/sdks/sentry/tsconfig.json` and add this to the top of the file 
```
 "extends": "../../../tsconfig",
```
`yarn` - to install the package 

observe error pointing out `utilities.ts`
<details>
<summary>error</summary>

```
# This file contains the result of Yarn building a package (@pulumi/sentry@workspace:pulumi/sdks/sentry)
# Script name: postinstall

Command failed: tsc: [96mutilities.ts[0m:[93m113[0m:[93m36[0m - [91merror[0m[90m TS2304: [0mCannot find name 'atob'.

[7m113[0m    params.setValue(Uint8Array.from(atob("eyJyZW1vdGUiOnsidXJsIjoicmVnaXN0cnkub3BlbnRvZnUub3JnL2ppYW55dWFuL3NlbnRyeSIsInZlcnNpb24iOiIwLjE0LjMifX0="), c => c.charCodeAt(0)));
[7m   [0m [91m                                   ~~~~[0m

[96mutilities.ts[0m:[93m113[0m:[93m157[0m - [91merror[0m[90m TS2339: [0mProperty 'charCodeAt' does not exist on type 'number'.

[7m113[0m    params.setValue(Uint8Array.from(atob("eyJyZW1vdGUiOnsidXJsIjoicmVnaXN0cnkub3BlbnRvZnUub3JnL2ppYW55dWFuL3NlbnRyeSIsInZlcnNpb24iOiIwLjE0LjMifX0="), c => c.charCodeAt(0)));
[7m   [0m [91m                                                                                                                                                            ~~~~~~~~~~[0m


Found 2 errors in the same file, starting at: utilities.ts[90m:113[0m
```

</details>

update utilities.ts to use `Buffer`

```diff
diff --git a/pulumi/sdks/sentry/utilities.ts b/pulumi/sdks/sentry/utilities.ts
index 5bd47be..320c5c1 100644
--- a/pulumi/sdks/sentry/utilities.ts
+++ b/pulumi/sdks/sentry/utilities.ts
@@ -110,8 +110,15 @@ export async function getPackage() : Promise<string | undefined> {
 			const params = new resproto.Parameterization();
 			params.setName("sentry");
 			params.setVersion("0.14.3");
-			params.setValue(Uint8Array.from(atob("eyJyZW1vdGUiOnsidXJsIjoicmVnaXN0cnkub3BlbnRvZnUub3JnL2ppYW55dWFuL3NlbnRyeSIsInZlcnNpb24iOiIwLjE0LjMifX0="), c => c.charCodeAt(0)));
-
+			// params.setValue(Uint8Array.from(atob("eyJyZW1vdGUiOnsidXJsIjoicmVnaXN0cnkub3BlbnRvZnUub3JnL2ppYW55dWFuL3NlbnRyeSIsInZlcnNpb24iOiIwLjE0LjMifX0="), c => c.charCodeAt(0)));
+            params.setValue(
+                new Uint8Array(
+                  Buffer.from(
+                    "eyJyZW1vdGUiOnsidXJsIjoicmVnaXN0cnkub3BlbnRvZnUub3JnL2ppYW55dWFuL3NlbnRyeSIsInZlcnNpb24iOiIwLjE0LjMifX0=",
+                    'base64'
+                  )
+                )
+              );
 			const req = new resproto.RegisterPackageRequest();
 			req.setName("terraform-provider");
 			req.setVersion("0.8.0");
```

`yarn` - this time build passes
