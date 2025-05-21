
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model TestcaseResult
 * 
 */
export type TestcaseResult = $Result.DefaultSelection<Prisma.$TestcaseResultPayload>
/**
 * Model problemSolved
 * 
 */
export type problemSolved = $Result.DefaultSelection<Prisma.$problemSolvedPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testcaseResult`: Exposes CRUD operations for the **TestcaseResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestcaseResults
    * const testcaseResults = await prisma.testcaseResult.findMany()
    * ```
    */
  get testcaseResult(): Prisma.TestcaseResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemSolved`: Exposes CRUD operations for the **problemSolved** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemSolveds
    * const problemSolveds = await prisma.problemSolved.findMany()
    * ```
    */
  get problemSolved(): Prisma.problemSolvedDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Problem: 'Problem',
    Submission: 'Submission',
    TestcaseResult: 'TestcaseResult',
    problemSolved: 'problemSolved'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "problem" | "submission" | "testcaseResult" | "problemSolved"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      TestcaseResult: {
        payload: Prisma.$TestcaseResultPayload<ExtArgs>
        fields: Prisma.TestcaseResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestcaseResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcaseResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestcaseResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcaseResultPayload>
          }
          findFirst: {
            args: Prisma.TestcaseResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcaseResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestcaseResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcaseResultPayload>
          }
          findMany: {
            args: Prisma.TestcaseResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcaseResultPayload>[]
          }
          create: {
            args: Prisma.TestcaseResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcaseResultPayload>
          }
          createMany: {
            args: Prisma.TestcaseResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestcaseResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcaseResultPayload>[]
          }
          delete: {
            args: Prisma.TestcaseResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcaseResultPayload>
          }
          update: {
            args: Prisma.TestcaseResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcaseResultPayload>
          }
          deleteMany: {
            args: Prisma.TestcaseResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestcaseResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestcaseResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcaseResultPayload>[]
          }
          upsert: {
            args: Prisma.TestcaseResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestcaseResultPayload>
          }
          aggregate: {
            args: Prisma.TestcaseResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestcaseResult>
          }
          groupBy: {
            args: Prisma.TestcaseResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestcaseResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestcaseResultCountArgs<ExtArgs>
            result: $Utils.Optional<TestcaseResultCountAggregateOutputType> | number
          }
        }
      }
      problemSolved: {
        payload: Prisma.$problemSolvedPayload<ExtArgs>
        fields: Prisma.problemSolvedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.problemSolvedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.problemSolvedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          findFirst: {
            args: Prisma.problemSolvedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.problemSolvedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          findMany: {
            args: Prisma.problemSolvedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>[]
          }
          create: {
            args: Prisma.problemSolvedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          createMany: {
            args: Prisma.problemSolvedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.problemSolvedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>[]
          }
          delete: {
            args: Prisma.problemSolvedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          update: {
            args: Prisma.problemSolvedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          deleteMany: {
            args: Prisma.problemSolvedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.problemSolvedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.problemSolvedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>[]
          }
          upsert: {
            args: Prisma.problemSolvedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          aggregate: {
            args: Prisma.ProblemSolvedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemSolved>
          }
          groupBy: {
            args: Prisma.problemSolvedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedGroupByOutputType>[]
          }
          count: {
            args: Prisma.problemSolvedCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    problem?: ProblemOmit
    submission?: SubmissionOmit
    testcaseResult?: TestcaseResultOmit
    problemSolved?: problemSolvedOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    problems: number
    Submission: number
    problemSolved: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | UserCountOutputTypeCountProblemsArgs
    Submission?: boolean | UserCountOutputTypeCountSubmissionArgs
    problemSolved?: boolean | UserCountOutputTypeCountProblemSolvedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemSolvedWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    Submission: number
    problemSolved: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Submission?: boolean | ProblemCountOutputTypeCountSubmissionArgs
    problemSolved?: boolean | ProblemCountOutputTypeCountProblemSolvedArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProblemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemSolvedWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    testcaseResults: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testcaseResults?: boolean | SubmissionCountOutputTypeCountTestcaseResultsArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountTestcaseResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestcaseResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    userName: string | null
    email: string | null
    password: string | null
    avatarImage: string | null
    role: $Enums.UserRole | null
    isEmailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationTokenExpiry: Date | null
    passwordResetToken: string | null
    passwordResetTokenExpiry: Date | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    userName: string | null
    email: string | null
    password: string | null
    avatarImage: string | null
    role: $Enums.UserRole | null
    isEmailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationTokenExpiry: Date | null
    passwordResetToken: string | null
    passwordResetTokenExpiry: Date | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    userName: number
    email: number
    password: number
    avatarImage: number
    role: number
    isEmailVerified: number
    emailVerificationToken: number
    emailVerificationTokenExpiry: number
    passwordResetToken: number
    passwordResetTokenExpiry: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    userName?: true
    email?: true
    password?: true
    avatarImage?: true
    role?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpiry?: true
    passwordResetToken?: true
    passwordResetTokenExpiry?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    userName?: true
    email?: true
    password?: true
    avatarImage?: true
    role?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpiry?: true
    passwordResetToken?: true
    passwordResetTokenExpiry?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    userName?: true
    email?: true
    password?: true
    avatarImage?: true
    role?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationTokenExpiry?: true
    passwordResetToken?: true
    passwordResetTokenExpiry?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullName: string | null
    userName: string
    email: string
    password: string
    avatarImage: string
    role: $Enums.UserRole
    isEmailVerified: boolean
    emailVerificationToken: string | null
    emailVerificationTokenExpiry: Date | null
    passwordResetToken: string | null
    passwordResetTokenExpiry: Date | null
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    avatarImage?: boolean
    role?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpiry?: boolean
    passwordResetToken?: boolean
    passwordResetTokenExpiry?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | User$problemsArgs<ExtArgs>
    Submission?: boolean | User$SubmissionArgs<ExtArgs>
    problemSolved?: boolean | User$problemSolvedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    avatarImage?: boolean
    role?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpiry?: boolean
    passwordResetToken?: boolean
    passwordResetTokenExpiry?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    avatarImage?: boolean
    role?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpiry?: boolean
    passwordResetToken?: boolean
    passwordResetTokenExpiry?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    userName?: boolean
    email?: boolean
    password?: boolean
    avatarImage?: boolean
    role?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpiry?: boolean
    passwordResetToken?: boolean
    passwordResetTokenExpiry?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "userName" | "email" | "password" | "avatarImage" | "role" | "isEmailVerified" | "emailVerificationToken" | "emailVerificationTokenExpiry" | "passwordResetToken" | "passwordResetTokenExpiry" | "refreshToken" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | User$problemsArgs<ExtArgs>
    Submission?: boolean | User$SubmissionArgs<ExtArgs>
    problemSolved?: boolean | User$problemSolvedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      problems: Prisma.$ProblemPayload<ExtArgs>[]
      Submission: Prisma.$SubmissionPayload<ExtArgs>[]
      problemSolved: Prisma.$problemSolvedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string | null
      userName: string
      email: string
      password: string
      avatarImage: string
      role: $Enums.UserRole
      isEmailVerified: boolean
      emailVerificationToken: string | null
      emailVerificationTokenExpiry: Date | null
      passwordResetToken: string | null
      passwordResetTokenExpiry: Date | null
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends User$problemsArgs<ExtArgs> = {}>(args?: Subset<T, User$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Submission<T extends User$SubmissionArgs<ExtArgs> = {}>(args?: Subset<T, User$SubmissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemSolved<T extends User$problemSolvedArgs<ExtArgs> = {}>(args?: Subset<T, User$problemSolvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarImage: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly emailVerificationTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly passwordResetToken: FieldRef<"User", 'String'>
    readonly passwordResetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.problems
   */
  export type User$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * User.Submission
   */
  export type User$SubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.problemSolved
   */
  export type User$problemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    where?: problemSolvedWhereInput
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    cursor?: problemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    difficulty: number
    tags: number
    hints: number
    examples: number
    constraints: number
    editorial: number
    testcases: number
    codeSnippets: number
    referenceSolutions: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ProblemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    tags?: true
    hints?: true
    examples?: true
    constraints?: true
    editorial?: true
    testcases?: true
    codeSnippets?: true
    referenceSolutions?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags: string[]
    hints: string[]
    examples: JsonValue
    constraints: string[]
    editorial: string | null
    testcases: JsonValue
    codeSnippets: JsonValue
    referenceSolutions: JsonValue
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    hints?: boolean
    examples?: boolean
    constraints?: boolean
    editorial?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Submission?: boolean | Problem$SubmissionArgs<ExtArgs>
    problemSolved?: boolean | Problem$problemSolvedArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    hints?: boolean
    examples?: boolean
    constraints?: boolean
    editorial?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    hints?: boolean
    examples?: boolean
    constraints?: boolean
    editorial?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    hints?: boolean
    examples?: boolean
    constraints?: boolean
    editorial?: boolean
    testcases?: boolean
    codeSnippets?: boolean
    referenceSolutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "difficulty" | "tags" | "hints" | "examples" | "constraints" | "editorial" | "testcases" | "codeSnippets" | "referenceSolutions" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Submission?: boolean | Problem$SubmissionArgs<ExtArgs>
    problemSolved?: boolean | Problem$problemSolvedArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Submission: Prisma.$SubmissionPayload<ExtArgs>[]
      problemSolved: Prisma.$problemSolvedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      difficulty: $Enums.Difficulty
      tags: string[]
      hints: string[]
      examples: Prisma.JsonValue
      constraints: string[]
      editorial: string | null
      testcases: Prisma.JsonValue
      codeSnippets: Prisma.JsonValue
      referenceSolutions: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Submission<T extends Problem$SubmissionArgs<ExtArgs> = {}>(args?: Subset<T, Problem$SubmissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemSolved<T extends Problem$problemSolvedArgs<ExtArgs> = {}>(args?: Subset<T, Problem$problemSolvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'String'>
    readonly title: FieldRef<"Problem", 'String'>
    readonly description: FieldRef<"Problem", 'String'>
    readonly difficulty: FieldRef<"Problem", 'Difficulty'>
    readonly tags: FieldRef<"Problem", 'String[]'>
    readonly hints: FieldRef<"Problem", 'String[]'>
    readonly examples: FieldRef<"Problem", 'Json'>
    readonly constraints: FieldRef<"Problem", 'String[]'>
    readonly editorial: FieldRef<"Problem", 'String'>
    readonly testcases: FieldRef<"Problem", 'Json'>
    readonly codeSnippets: FieldRef<"Problem", 'Json'>
    readonly referenceSolutions: FieldRef<"Problem", 'Json'>
    readonly createdAt: FieldRef<"Problem", 'DateTime'>
    readonly updatedAt: FieldRef<"Problem", 'DateTime'>
    readonly userId: FieldRef<"Problem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem.Submission
   */
  export type Problem$SubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Problem.problemSolved
   */
  export type Problem$problemSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    where?: problemSolvedWhereInput
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    cursor?: problemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    problemId: string | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    problemId: string | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    sourceCode: number
    language: number
    stdin: number
    stdout: number
    stderr: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    userId: number
    problemId: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    problemId?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    problemId?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    sourceCode?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    problemId?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    sourceCode: JsonValue
    language: string
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    userId: string
    problemId: string
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    problemId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    testcaseResults?: boolean | Submission$testcaseResultsArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    problemId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    problemId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    problemId?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceCode" | "language" | "stdin" | "stdout" | "stderr" | "compileOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt" | "userId" | "problemId", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    testcaseResults?: boolean | Submission$testcaseResultsArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
      testcaseResults: Prisma.$TestcaseResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceCode: Prisma.JsonValue
      language: string
      stdin: string | null
      stdout: string | null
      stderr: string | null
      compileOutput: string | null
      status: string
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
      userId: string
      problemId: string
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testcaseResults<T extends Submission$testcaseResultsArgs<ExtArgs> = {}>(args?: Subset<T, Submission$testcaseResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestcaseResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly sourceCode: FieldRef<"Submission", 'Json'>
    readonly language: FieldRef<"Submission", 'String'>
    readonly stdin: FieldRef<"Submission", 'String'>
    readonly stdout: FieldRef<"Submission", 'String'>
    readonly stderr: FieldRef<"Submission", 'String'>
    readonly compileOutput: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'String'>
    readonly memory: FieldRef<"Submission", 'String'>
    readonly time: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly problemId: FieldRef<"Submission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.testcaseResults
   */
  export type Submission$testcaseResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseResult
     */
    select?: TestcaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestcaseResult
     */
    omit?: TestcaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseResultInclude<ExtArgs> | null
    where?: TestcaseResultWhereInput
    orderBy?: TestcaseResultOrderByWithRelationInput | TestcaseResultOrderByWithRelationInput[]
    cursor?: TestcaseResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestcaseResultScalarFieldEnum | TestcaseResultScalarFieldEnum[]
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model TestcaseResult
   */

  export type AggregateTestcaseResult = {
    _count: TestcaseResultCountAggregateOutputType | null
    _avg: TestcaseResultAvgAggregateOutputType | null
    _sum: TestcaseResultSumAggregateOutputType | null
    _min: TestcaseResultMinAggregateOutputType | null
    _max: TestcaseResultMaxAggregateOutputType | null
  }

  export type TestcaseResultAvgAggregateOutputType = {
    testcase: number | null
  }

  export type TestcaseResultSumAggregateOutputType = {
    testcase: number | null
  }

  export type TestcaseResultMinAggregateOutputType = {
    id: string | null
    testcase: number | null
    passed: boolean | null
    stdin: string | null
    stdout: string | null
    expectedOutput: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
    submissionId: string | null
  }

  export type TestcaseResultMaxAggregateOutputType = {
    id: string | null
    testcase: number | null
    passed: boolean | null
    stdin: string | null
    stdout: string | null
    expectedOutput: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
    submissionId: string | null
  }

  export type TestcaseResultCountAggregateOutputType = {
    id: number
    testcase: number
    passed: number
    stdin: number
    stdout: number
    expectedOutput: number
    stderr: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    submissionId: number
    _all: number
  }


  export type TestcaseResultAvgAggregateInputType = {
    testcase?: true
  }

  export type TestcaseResultSumAggregateInputType = {
    testcase?: true
  }

  export type TestcaseResultMinAggregateInputType = {
    id?: true
    testcase?: true
    passed?: true
    stdin?: true
    stdout?: true
    expectedOutput?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
  }

  export type TestcaseResultMaxAggregateInputType = {
    id?: true
    testcase?: true
    passed?: true
    stdin?: true
    stdout?: true
    expectedOutput?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
  }

  export type TestcaseResultCountAggregateInputType = {
    id?: true
    testcase?: true
    passed?: true
    stdin?: true
    stdout?: true
    expectedOutput?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    submissionId?: true
    _all?: true
  }

  export type TestcaseResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestcaseResult to aggregate.
     */
    where?: TestcaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestcaseResults to fetch.
     */
    orderBy?: TestcaseResultOrderByWithRelationInput | TestcaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestcaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestcaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestcaseResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestcaseResults
    **/
    _count?: true | TestcaseResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestcaseResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestcaseResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestcaseResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestcaseResultMaxAggregateInputType
  }

  export type GetTestcaseResultAggregateType<T extends TestcaseResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTestcaseResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestcaseResult[P]>
      : GetScalarType<T[P], AggregateTestcaseResult[P]>
  }




  export type TestcaseResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestcaseResultWhereInput
    orderBy?: TestcaseResultOrderByWithAggregationInput | TestcaseResultOrderByWithAggregationInput[]
    by: TestcaseResultScalarFieldEnum[] | TestcaseResultScalarFieldEnum
    having?: TestcaseResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestcaseResultCountAggregateInputType | true
    _avg?: TestcaseResultAvgAggregateInputType
    _sum?: TestcaseResultSumAggregateInputType
    _min?: TestcaseResultMinAggregateInputType
    _max?: TestcaseResultMaxAggregateInputType
  }

  export type TestcaseResultGroupByOutputType = {
    id: string
    testcase: number
    passed: boolean
    stdin: string | null
    stdout: string | null
    expectedOutput: string | null
    stderr: string | null
    compileOutput: string | null
    status: string
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    submissionId: string
    _count: TestcaseResultCountAggregateOutputType | null
    _avg: TestcaseResultAvgAggregateOutputType | null
    _sum: TestcaseResultSumAggregateOutputType | null
    _min: TestcaseResultMinAggregateOutputType | null
    _max: TestcaseResultMaxAggregateOutputType | null
  }

  type GetTestcaseResultGroupByPayload<T extends TestcaseResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestcaseResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestcaseResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestcaseResultGroupByOutputType[P]>
            : GetScalarType<T[P], TestcaseResultGroupByOutputType[P]>
        }
      >
    >


  export type TestcaseResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testcase?: boolean
    passed?: boolean
    stdin?: boolean
    stdout?: boolean
    expectedOutput?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testcaseResult"]>

  export type TestcaseResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testcase?: boolean
    passed?: boolean
    stdin?: boolean
    stdout?: boolean
    expectedOutput?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testcaseResult"]>

  export type TestcaseResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testcase?: boolean
    passed?: boolean
    stdin?: boolean
    stdout?: boolean
    expectedOutput?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testcaseResult"]>

  export type TestcaseResultSelectScalar = {
    id?: boolean
    testcase?: boolean
    passed?: boolean
    stdin?: boolean
    stdout?: boolean
    expectedOutput?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submissionId?: boolean
  }

  export type TestcaseResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "testcase" | "passed" | "stdin" | "stdout" | "expectedOutput" | "stderr" | "compileOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt" | "submissionId", ExtArgs["result"]["testcaseResult"]>
  export type TestcaseResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type TestcaseResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type TestcaseResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $TestcaseResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestcaseResult"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      testcase: number
      passed: boolean
      stdin: string | null
      stdout: string | null
      expectedOutput: string | null
      stderr: string | null
      compileOutput: string | null
      status: string
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
      submissionId: string
    }, ExtArgs["result"]["testcaseResult"]>
    composites: {}
  }

  type TestcaseResultGetPayload<S extends boolean | null | undefined | TestcaseResultDefaultArgs> = $Result.GetResult<Prisma.$TestcaseResultPayload, S>

  type TestcaseResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestcaseResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestcaseResultCountAggregateInputType | true
    }

  export interface TestcaseResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestcaseResult'], meta: { name: 'TestcaseResult' } }
    /**
     * Find zero or one TestcaseResult that matches the filter.
     * @param {TestcaseResultFindUniqueArgs} args - Arguments to find a TestcaseResult
     * @example
     * // Get one TestcaseResult
     * const testcaseResult = await prisma.testcaseResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestcaseResultFindUniqueArgs>(args: SelectSubset<T, TestcaseResultFindUniqueArgs<ExtArgs>>): Prisma__TestcaseResultClient<$Result.GetResult<Prisma.$TestcaseResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestcaseResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestcaseResultFindUniqueOrThrowArgs} args - Arguments to find a TestcaseResult
     * @example
     * // Get one TestcaseResult
     * const testcaseResult = await prisma.testcaseResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestcaseResultFindUniqueOrThrowArgs>(args: SelectSubset<T, TestcaseResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestcaseResultClient<$Result.GetResult<Prisma.$TestcaseResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestcaseResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseResultFindFirstArgs} args - Arguments to find a TestcaseResult
     * @example
     * // Get one TestcaseResult
     * const testcaseResult = await prisma.testcaseResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestcaseResultFindFirstArgs>(args?: SelectSubset<T, TestcaseResultFindFirstArgs<ExtArgs>>): Prisma__TestcaseResultClient<$Result.GetResult<Prisma.$TestcaseResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestcaseResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseResultFindFirstOrThrowArgs} args - Arguments to find a TestcaseResult
     * @example
     * // Get one TestcaseResult
     * const testcaseResult = await prisma.testcaseResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestcaseResultFindFirstOrThrowArgs>(args?: SelectSubset<T, TestcaseResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestcaseResultClient<$Result.GetResult<Prisma.$TestcaseResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestcaseResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestcaseResults
     * const testcaseResults = await prisma.testcaseResult.findMany()
     * 
     * // Get first 10 TestcaseResults
     * const testcaseResults = await prisma.testcaseResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testcaseResultWithIdOnly = await prisma.testcaseResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestcaseResultFindManyArgs>(args?: SelectSubset<T, TestcaseResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestcaseResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestcaseResult.
     * @param {TestcaseResultCreateArgs} args - Arguments to create a TestcaseResult.
     * @example
     * // Create one TestcaseResult
     * const TestcaseResult = await prisma.testcaseResult.create({
     *   data: {
     *     // ... data to create a TestcaseResult
     *   }
     * })
     * 
     */
    create<T extends TestcaseResultCreateArgs>(args: SelectSubset<T, TestcaseResultCreateArgs<ExtArgs>>): Prisma__TestcaseResultClient<$Result.GetResult<Prisma.$TestcaseResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestcaseResults.
     * @param {TestcaseResultCreateManyArgs} args - Arguments to create many TestcaseResults.
     * @example
     * // Create many TestcaseResults
     * const testcaseResult = await prisma.testcaseResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestcaseResultCreateManyArgs>(args?: SelectSubset<T, TestcaseResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestcaseResults and returns the data saved in the database.
     * @param {TestcaseResultCreateManyAndReturnArgs} args - Arguments to create many TestcaseResults.
     * @example
     * // Create many TestcaseResults
     * const testcaseResult = await prisma.testcaseResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestcaseResults and only return the `id`
     * const testcaseResultWithIdOnly = await prisma.testcaseResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestcaseResultCreateManyAndReturnArgs>(args?: SelectSubset<T, TestcaseResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestcaseResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestcaseResult.
     * @param {TestcaseResultDeleteArgs} args - Arguments to delete one TestcaseResult.
     * @example
     * // Delete one TestcaseResult
     * const TestcaseResult = await prisma.testcaseResult.delete({
     *   where: {
     *     // ... filter to delete one TestcaseResult
     *   }
     * })
     * 
     */
    delete<T extends TestcaseResultDeleteArgs>(args: SelectSubset<T, TestcaseResultDeleteArgs<ExtArgs>>): Prisma__TestcaseResultClient<$Result.GetResult<Prisma.$TestcaseResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestcaseResult.
     * @param {TestcaseResultUpdateArgs} args - Arguments to update one TestcaseResult.
     * @example
     * // Update one TestcaseResult
     * const testcaseResult = await prisma.testcaseResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestcaseResultUpdateArgs>(args: SelectSubset<T, TestcaseResultUpdateArgs<ExtArgs>>): Prisma__TestcaseResultClient<$Result.GetResult<Prisma.$TestcaseResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestcaseResults.
     * @param {TestcaseResultDeleteManyArgs} args - Arguments to filter TestcaseResults to delete.
     * @example
     * // Delete a few TestcaseResults
     * const { count } = await prisma.testcaseResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestcaseResultDeleteManyArgs>(args?: SelectSubset<T, TestcaseResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestcaseResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestcaseResults
     * const testcaseResult = await prisma.testcaseResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestcaseResultUpdateManyArgs>(args: SelectSubset<T, TestcaseResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestcaseResults and returns the data updated in the database.
     * @param {TestcaseResultUpdateManyAndReturnArgs} args - Arguments to update many TestcaseResults.
     * @example
     * // Update many TestcaseResults
     * const testcaseResult = await prisma.testcaseResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestcaseResults and only return the `id`
     * const testcaseResultWithIdOnly = await prisma.testcaseResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestcaseResultUpdateManyAndReturnArgs>(args: SelectSubset<T, TestcaseResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestcaseResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestcaseResult.
     * @param {TestcaseResultUpsertArgs} args - Arguments to update or create a TestcaseResult.
     * @example
     * // Update or create a TestcaseResult
     * const testcaseResult = await prisma.testcaseResult.upsert({
     *   create: {
     *     // ... data to create a TestcaseResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestcaseResult we want to update
     *   }
     * })
     */
    upsert<T extends TestcaseResultUpsertArgs>(args: SelectSubset<T, TestcaseResultUpsertArgs<ExtArgs>>): Prisma__TestcaseResultClient<$Result.GetResult<Prisma.$TestcaseResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestcaseResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseResultCountArgs} args - Arguments to filter TestcaseResults to count.
     * @example
     * // Count the number of TestcaseResults
     * const count = await prisma.testcaseResult.count({
     *   where: {
     *     // ... the filter for the TestcaseResults we want to count
     *   }
     * })
    **/
    count<T extends TestcaseResultCountArgs>(
      args?: Subset<T, TestcaseResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestcaseResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestcaseResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestcaseResultAggregateArgs>(args: Subset<T, TestcaseResultAggregateArgs>): Prisma.PrismaPromise<GetTestcaseResultAggregateType<T>>

    /**
     * Group by TestcaseResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestcaseResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestcaseResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestcaseResultGroupByArgs['orderBy'] }
        : { orderBy?: TestcaseResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestcaseResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestcaseResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestcaseResult model
   */
  readonly fields: TestcaseResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestcaseResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestcaseResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestcaseResult model
   */
  interface TestcaseResultFieldRefs {
    readonly id: FieldRef<"TestcaseResult", 'String'>
    readonly testcase: FieldRef<"TestcaseResult", 'Int'>
    readonly passed: FieldRef<"TestcaseResult", 'Boolean'>
    readonly stdin: FieldRef<"TestcaseResult", 'String'>
    readonly stdout: FieldRef<"TestcaseResult", 'String'>
    readonly expectedOutput: FieldRef<"TestcaseResult", 'String'>
    readonly stderr: FieldRef<"TestcaseResult", 'String'>
    readonly compileOutput: FieldRef<"TestcaseResult", 'String'>
    readonly status: FieldRef<"TestcaseResult", 'String'>
    readonly memory: FieldRef<"TestcaseResult", 'String'>
    readonly time: FieldRef<"TestcaseResult", 'String'>
    readonly createdAt: FieldRef<"TestcaseResult", 'DateTime'>
    readonly updatedAt: FieldRef<"TestcaseResult", 'DateTime'>
    readonly submissionId: FieldRef<"TestcaseResult", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TestcaseResult findUnique
   */
  export type TestcaseResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseResult
     */
    select?: TestcaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestcaseResult
     */
    omit?: TestcaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestcaseResult to fetch.
     */
    where: TestcaseResultWhereUniqueInput
  }

  /**
   * TestcaseResult findUniqueOrThrow
   */
  export type TestcaseResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseResult
     */
    select?: TestcaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestcaseResult
     */
    omit?: TestcaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestcaseResult to fetch.
     */
    where: TestcaseResultWhereUniqueInput
  }

  /**
   * TestcaseResult findFirst
   */
  export type TestcaseResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseResult
     */
    select?: TestcaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestcaseResult
     */
    omit?: TestcaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestcaseResult to fetch.
     */
    where?: TestcaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestcaseResults to fetch.
     */
    orderBy?: TestcaseResultOrderByWithRelationInput | TestcaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestcaseResults.
     */
    cursor?: TestcaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestcaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestcaseResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestcaseResults.
     */
    distinct?: TestcaseResultScalarFieldEnum | TestcaseResultScalarFieldEnum[]
  }

  /**
   * TestcaseResult findFirstOrThrow
   */
  export type TestcaseResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseResult
     */
    select?: TestcaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestcaseResult
     */
    omit?: TestcaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestcaseResult to fetch.
     */
    where?: TestcaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestcaseResults to fetch.
     */
    orderBy?: TestcaseResultOrderByWithRelationInput | TestcaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestcaseResults.
     */
    cursor?: TestcaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestcaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestcaseResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestcaseResults.
     */
    distinct?: TestcaseResultScalarFieldEnum | TestcaseResultScalarFieldEnum[]
  }

  /**
   * TestcaseResult findMany
   */
  export type TestcaseResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseResult
     */
    select?: TestcaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestcaseResult
     */
    omit?: TestcaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseResultInclude<ExtArgs> | null
    /**
     * Filter, which TestcaseResults to fetch.
     */
    where?: TestcaseResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestcaseResults to fetch.
     */
    orderBy?: TestcaseResultOrderByWithRelationInput | TestcaseResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestcaseResults.
     */
    cursor?: TestcaseResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestcaseResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestcaseResults.
     */
    skip?: number
    distinct?: TestcaseResultScalarFieldEnum | TestcaseResultScalarFieldEnum[]
  }

  /**
   * TestcaseResult create
   */
  export type TestcaseResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseResult
     */
    select?: TestcaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestcaseResult
     */
    omit?: TestcaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseResultInclude<ExtArgs> | null
    /**
     * The data needed to create a TestcaseResult.
     */
    data: XOR<TestcaseResultCreateInput, TestcaseResultUncheckedCreateInput>
  }

  /**
   * TestcaseResult createMany
   */
  export type TestcaseResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestcaseResults.
     */
    data: TestcaseResultCreateManyInput | TestcaseResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestcaseResult createManyAndReturn
   */
  export type TestcaseResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseResult
     */
    select?: TestcaseResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestcaseResult
     */
    omit?: TestcaseResultOmit<ExtArgs> | null
    /**
     * The data used to create many TestcaseResults.
     */
    data: TestcaseResultCreateManyInput | TestcaseResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestcaseResult update
   */
  export type TestcaseResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseResult
     */
    select?: TestcaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestcaseResult
     */
    omit?: TestcaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseResultInclude<ExtArgs> | null
    /**
     * The data needed to update a TestcaseResult.
     */
    data: XOR<TestcaseResultUpdateInput, TestcaseResultUncheckedUpdateInput>
    /**
     * Choose, which TestcaseResult to update.
     */
    where: TestcaseResultWhereUniqueInput
  }

  /**
   * TestcaseResult updateMany
   */
  export type TestcaseResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestcaseResults.
     */
    data: XOR<TestcaseResultUpdateManyMutationInput, TestcaseResultUncheckedUpdateManyInput>
    /**
     * Filter which TestcaseResults to update
     */
    where?: TestcaseResultWhereInput
    /**
     * Limit how many TestcaseResults to update.
     */
    limit?: number
  }

  /**
   * TestcaseResult updateManyAndReturn
   */
  export type TestcaseResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseResult
     */
    select?: TestcaseResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestcaseResult
     */
    omit?: TestcaseResultOmit<ExtArgs> | null
    /**
     * The data used to update TestcaseResults.
     */
    data: XOR<TestcaseResultUpdateManyMutationInput, TestcaseResultUncheckedUpdateManyInput>
    /**
     * Filter which TestcaseResults to update
     */
    where?: TestcaseResultWhereInput
    /**
     * Limit how many TestcaseResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestcaseResult upsert
   */
  export type TestcaseResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseResult
     */
    select?: TestcaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestcaseResult
     */
    omit?: TestcaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseResultInclude<ExtArgs> | null
    /**
     * The filter to search for the TestcaseResult to update in case it exists.
     */
    where: TestcaseResultWhereUniqueInput
    /**
     * In case the TestcaseResult found by the `where` argument doesn't exist, create a new TestcaseResult with this data.
     */
    create: XOR<TestcaseResultCreateInput, TestcaseResultUncheckedCreateInput>
    /**
     * In case the TestcaseResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestcaseResultUpdateInput, TestcaseResultUncheckedUpdateInput>
  }

  /**
   * TestcaseResult delete
   */
  export type TestcaseResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseResult
     */
    select?: TestcaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestcaseResult
     */
    omit?: TestcaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseResultInclude<ExtArgs> | null
    /**
     * Filter which TestcaseResult to delete.
     */
    where: TestcaseResultWhereUniqueInput
  }

  /**
   * TestcaseResult deleteMany
   */
  export type TestcaseResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestcaseResults to delete
     */
    where?: TestcaseResultWhereInput
    /**
     * Limit how many TestcaseResults to delete.
     */
    limit?: number
  }

  /**
   * TestcaseResult without action
   */
  export type TestcaseResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestcaseResult
     */
    select?: TestcaseResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestcaseResult
     */
    omit?: TestcaseResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestcaseResultInclude<ExtArgs> | null
  }


  /**
   * Model problemSolved
   */

  export type AggregateProblemSolved = {
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  export type ProblemSolvedMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    problemId: string | null
  }

  export type ProblemSolvedMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    problemId: string | null
  }

  export type ProblemSolvedCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    problemId: number
    _all: number
  }


  export type ProblemSolvedMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    problemId?: true
  }

  export type ProblemSolvedMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    problemId?: true
  }

  export type ProblemSolvedCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    problemId?: true
    _all?: true
  }

  export type ProblemSolvedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problemSolved to aggregate.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned problemSolveds
    **/
    _count?: true | ProblemSolvedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemSolvedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type GetProblemSolvedAggregateType<T extends ProblemSolvedAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemSolved]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemSolved[P]>
      : GetScalarType<T[P], AggregateProblemSolved[P]>
  }




  export type problemSolvedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemSolvedWhereInput
    orderBy?: problemSolvedOrderByWithAggregationInput | problemSolvedOrderByWithAggregationInput[]
    by: ProblemSolvedScalarFieldEnum[] | ProblemSolvedScalarFieldEnum
    having?: problemSolvedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemSolvedCountAggregateInputType | true
    _min?: ProblemSolvedMinAggregateInputType
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type ProblemSolvedGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    problemId: string
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  type GetProblemSolvedGroupByPayload<T extends problemSolvedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemSolvedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemSolvedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
        }
      >
    >


  export type problemSolvedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    problemId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type problemSolvedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    problemId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type problemSolvedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    problemId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type problemSolvedSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    problemId?: boolean
  }

  export type problemSolvedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "problemId", ExtArgs["result"]["problemSolved"]>
  export type problemSolvedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type problemSolvedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type problemSolvedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $problemSolvedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "problemSolved"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      problemId: string
    }, ExtArgs["result"]["problemSolved"]>
    composites: {}
  }

  type problemSolvedGetPayload<S extends boolean | null | undefined | problemSolvedDefaultArgs> = $Result.GetResult<Prisma.$problemSolvedPayload, S>

  type problemSolvedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<problemSolvedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemSolvedCountAggregateInputType | true
    }

  export interface problemSolvedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['problemSolved'], meta: { name: 'problemSolved' } }
    /**
     * Find zero or one ProblemSolved that matches the filter.
     * @param {problemSolvedFindUniqueArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends problemSolvedFindUniqueArgs>(args: SelectSubset<T, problemSolvedFindUniqueArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemSolved that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {problemSolvedFindUniqueOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends problemSolvedFindUniqueOrThrowArgs>(args: SelectSubset<T, problemSolvedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedFindFirstArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends problemSolvedFindFirstArgs>(args?: SelectSubset<T, problemSolvedFindFirstArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedFindFirstOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends problemSolvedFindFirstOrThrowArgs>(args?: SelectSubset<T, problemSolvedFindFirstOrThrowArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemSolveds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany()
     * 
     * // Get first 10 ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends problemSolvedFindManyArgs>(args?: SelectSubset<T, problemSolvedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemSolved.
     * @param {problemSolvedCreateArgs} args - Arguments to create a ProblemSolved.
     * @example
     * // Create one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.create({
     *   data: {
     *     // ... data to create a ProblemSolved
     *   }
     * })
     * 
     */
    create<T extends problemSolvedCreateArgs>(args: SelectSubset<T, problemSolvedCreateArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemSolveds.
     * @param {problemSolvedCreateManyArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends problemSolvedCreateManyArgs>(args?: SelectSubset<T, problemSolvedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemSolveds and returns the data saved in the database.
     * @param {problemSolvedCreateManyAndReturnArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends problemSolvedCreateManyAndReturnArgs>(args?: SelectSubset<T, problemSolvedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemSolved.
     * @param {problemSolvedDeleteArgs} args - Arguments to delete one ProblemSolved.
     * @example
     * // Delete one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.delete({
     *   where: {
     *     // ... filter to delete one ProblemSolved
     *   }
     * })
     * 
     */
    delete<T extends problemSolvedDeleteArgs>(args: SelectSubset<T, problemSolvedDeleteArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemSolved.
     * @param {problemSolvedUpdateArgs} args - Arguments to update one ProblemSolved.
     * @example
     * // Update one ProblemSolved
     * const problemSolved = await prisma.problemSolved.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends problemSolvedUpdateArgs>(args: SelectSubset<T, problemSolvedUpdateArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemSolveds.
     * @param {problemSolvedDeleteManyArgs} args - Arguments to filter ProblemSolveds to delete.
     * @example
     * // Delete a few ProblemSolveds
     * const { count } = await prisma.problemSolved.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends problemSolvedDeleteManyArgs>(args?: SelectSubset<T, problemSolvedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends problemSolvedUpdateManyArgs>(args: SelectSubset<T, problemSolvedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds and returns the data updated in the database.
     * @param {problemSolvedUpdateManyAndReturnArgs} args - Arguments to update many ProblemSolveds.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends problemSolvedUpdateManyAndReturnArgs>(args: SelectSubset<T, problemSolvedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemSolved.
     * @param {problemSolvedUpsertArgs} args - Arguments to update or create a ProblemSolved.
     * @example
     * // Update or create a ProblemSolved
     * const problemSolved = await prisma.problemSolved.upsert({
     *   create: {
     *     // ... data to create a ProblemSolved
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemSolved we want to update
     *   }
     * })
     */
    upsert<T extends problemSolvedUpsertArgs>(args: SelectSubset<T, problemSolvedUpsertArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedCountArgs} args - Arguments to filter ProblemSolveds to count.
     * @example
     * // Count the number of ProblemSolveds
     * const count = await prisma.problemSolved.count({
     *   where: {
     *     // ... the filter for the ProblemSolveds we want to count
     *   }
     * })
    **/
    count<T extends problemSolvedCountArgs>(
      args?: Subset<T, problemSolvedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemSolvedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemSolvedAggregateArgs>(args: Subset<T, ProblemSolvedAggregateArgs>): Prisma.PrismaPromise<GetProblemSolvedAggregateType<T>>

    /**
     * Group by ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends problemSolvedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: problemSolvedGroupByArgs['orderBy'] }
        : { orderBy?: problemSolvedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, problemSolvedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemSolvedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the problemSolved model
   */
  readonly fields: problemSolvedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for problemSolved.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__problemSolvedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the problemSolved model
   */
  interface problemSolvedFieldRefs {
    readonly id: FieldRef<"problemSolved", 'String'>
    readonly createdAt: FieldRef<"problemSolved", 'DateTime'>
    readonly updatedAt: FieldRef<"problemSolved", 'DateTime'>
    readonly userId: FieldRef<"problemSolved", 'String'>
    readonly problemId: FieldRef<"problemSolved", 'String'>
  }
    

  // Custom InputTypes
  /**
   * problemSolved findUnique
   */
  export type problemSolvedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved findUniqueOrThrow
   */
  export type problemSolvedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved findFirst
   */
  export type problemSolvedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problemSolveds.
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * problemSolved findFirstOrThrow
   */
  export type problemSolvedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problemSolveds.
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * problemSolved findMany
   */
  export type problemSolvedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolveds to fetch.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing problemSolveds.
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * problemSolved create
   */
  export type problemSolvedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to create a problemSolved.
     */
    data: XOR<problemSolvedCreateInput, problemSolvedUncheckedCreateInput>
  }

  /**
   * problemSolved createMany
   */
  export type problemSolvedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many problemSolveds.
     */
    data: problemSolvedCreateManyInput | problemSolvedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * problemSolved createManyAndReturn
   */
  export type problemSolvedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * The data used to create many problemSolveds.
     */
    data: problemSolvedCreateManyInput | problemSolvedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * problemSolved update
   */
  export type problemSolvedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to update a problemSolved.
     */
    data: XOR<problemSolvedUpdateInput, problemSolvedUncheckedUpdateInput>
    /**
     * Choose, which problemSolved to update.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved updateMany
   */
  export type problemSolvedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update problemSolveds.
     */
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which problemSolveds to update
     */
    where?: problemSolvedWhereInput
    /**
     * Limit how many problemSolveds to update.
     */
    limit?: number
  }

  /**
   * problemSolved updateManyAndReturn
   */
  export type problemSolvedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * The data used to update problemSolveds.
     */
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which problemSolveds to update
     */
    where?: problemSolvedWhereInput
    /**
     * Limit how many problemSolveds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * problemSolved upsert
   */
  export type problemSolvedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * The filter to search for the problemSolved to update in case it exists.
     */
    where: problemSolvedWhereUniqueInput
    /**
     * In case the problemSolved found by the `where` argument doesn't exist, create a new problemSolved with this data.
     */
    create: XOR<problemSolvedCreateInput, problemSolvedUncheckedCreateInput>
    /**
     * In case the problemSolved was found with the provided `where` argument, update it with this data.
     */
    update: XOR<problemSolvedUpdateInput, problemSolvedUncheckedUpdateInput>
  }

  /**
   * problemSolved delete
   */
  export type problemSolvedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter which problemSolved to delete.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved deleteMany
   */
  export type problemSolvedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problemSolveds to delete
     */
    where?: problemSolvedWhereInput
    /**
     * Limit how many problemSolveds to delete.
     */
    limit?: number
  }

  /**
   * problemSolved without action
   */
  export type problemSolvedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    userName: 'userName',
    email: 'email',
    password: 'password',
    avatarImage: 'avatarImage',
    role: 'role',
    isEmailVerified: 'isEmailVerified',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationTokenExpiry: 'emailVerificationTokenExpiry',
    passwordResetToken: 'passwordResetToken',
    passwordResetTokenExpiry: 'passwordResetTokenExpiry',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    tags: 'tags',
    hints: 'hints',
    examples: 'examples',
    constraints: 'constraints',
    editorial: 'editorial',
    testcases: 'testcases',
    codeSnippets: 'codeSnippets',
    referenceSolutions: 'referenceSolutions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    sourceCode: 'sourceCode',
    language: 'language',
    stdin: 'stdin',
    stdout: 'stdout',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    problemId: 'problemId'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const TestcaseResultScalarFieldEnum: {
    id: 'id',
    testcase: 'testcase',
    passed: 'passed',
    stdin: 'stdin',
    stdout: 'stdout',
    expectedOutput: 'expectedOutput',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    submissionId: 'submissionId'
  };

  export type TestcaseResultScalarFieldEnum = (typeof TestcaseResultScalarFieldEnum)[keyof typeof TestcaseResultScalarFieldEnum]


  export const ProblemSolvedScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    problemId: 'problemId'
  };

  export type ProblemSolvedScalarFieldEnum = (typeof ProblemSolvedScalarFieldEnum)[keyof typeof ProblemSolvedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringNullableFilter<"User"> | string | null
    userName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatarImage?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordResetToken?: StringNullableFilter<"User"> | string | null
    passwordResetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    Submission?: SubmissionListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarImage?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpiry?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetTokenExpiry?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemOrderByRelationAggregateInput
    Submission?: SubmissionOrderByRelationAggregateInput
    problemSolved?: problemSolvedOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userName?: string
    email?: string
    emailVerificationToken?: string
    passwordResetToken?: string
    refreshToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    avatarImage?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerificationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    passwordResetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    Submission?: SubmissionListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
  }, "id" | "userName" | "email" | "emailVerificationToken" | "passwordResetToken" | "refreshToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrderInput | SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarImage?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpiry?: SortOrderInput | SortOrder
    passwordResetToken?: SortOrderInput | SortOrder
    passwordResetTokenExpiry?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    userName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatarImage?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    passwordResetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordResetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    hints?: StringNullableListFilter<"Problem">
    examples?: JsonFilter<"Problem">
    constraints?: StringNullableListFilter<"Problem">
    editorial?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    userId?: StringFilter<"Problem"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Submission?: SubmissionListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    hints?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    editorial?: SortOrderInput | SortOrder
    testcases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    Submission?: SubmissionOrderByRelationAggregateInput
    problemSolved?: problemSolvedOrderByRelationAggregateInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    hints?: StringNullableListFilter<"Problem">
    examples?: JsonFilter<"Problem">
    constraints?: StringNullableListFilter<"Problem">
    editorial?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    userId?: StringFilter<"Problem"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Submission?: SubmissionListRelationFilter
    problemSolved?: ProblemSolvedListRelationFilter
  }, "id">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    hints?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    editorial?: SortOrderInput | SortOrder
    testcases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Problem"> | string
    title?: StringWithAggregatesFilter<"Problem"> | string
    description?: StringWithAggregatesFilter<"Problem"> | string
    difficulty?: EnumDifficultyWithAggregatesFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    hints?: StringNullableListFilter<"Problem">
    examples?: JsonWithAggregatesFilter<"Problem">
    constraints?: StringNullableListFilter<"Problem">
    editorial?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    testcases?: JsonWithAggregatesFilter<"Problem">
    codeSnippets?: JsonWithAggregatesFilter<"Problem">
    referenceSolutions?: JsonWithAggregatesFilter<"Problem">
    createdAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
    userId?: StringWithAggregatesFilter<"Problem"> | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    testcaseResults?: TestcaseResultListRelationFilter
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
    testcaseResults?: TestcaseResultOrderByRelationAggregateInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    sourceCode?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    testcaseResults?: TestcaseResultListRelationFilter
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    sourceCode?: JsonWithAggregatesFilter<"Submission">
    language?: StringWithAggregatesFilter<"Submission"> | string
    stdin?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stdout?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stderr?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    status?: StringWithAggregatesFilter<"Submission"> | string
    memory?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    time?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    problemId?: StringWithAggregatesFilter<"Submission"> | string
  }

  export type TestcaseResultWhereInput = {
    AND?: TestcaseResultWhereInput | TestcaseResultWhereInput[]
    OR?: TestcaseResultWhereInput[]
    NOT?: TestcaseResultWhereInput | TestcaseResultWhereInput[]
    id?: StringFilter<"TestcaseResult"> | string
    testcase?: IntFilter<"TestcaseResult"> | number
    passed?: BoolFilter<"TestcaseResult"> | boolean
    stdin?: StringNullableFilter<"TestcaseResult"> | string | null
    stdout?: StringNullableFilter<"TestcaseResult"> | string | null
    expectedOutput?: StringNullableFilter<"TestcaseResult"> | string | null
    stderr?: StringNullableFilter<"TestcaseResult"> | string | null
    compileOutput?: StringNullableFilter<"TestcaseResult"> | string | null
    status?: StringFilter<"TestcaseResult"> | string
    memory?: StringNullableFilter<"TestcaseResult"> | string | null
    time?: StringNullableFilter<"TestcaseResult"> | string | null
    createdAt?: DateTimeFilter<"TestcaseResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestcaseResult"> | Date | string
    submissionId?: StringFilter<"TestcaseResult"> | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }

  export type TestcaseResultOrderByWithRelationInput = {
    id?: SortOrder
    testcase?: SortOrder
    passed?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    expectedOutput?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    submission?: SubmissionOrderByWithRelationInput
  }

  export type TestcaseResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestcaseResultWhereInput | TestcaseResultWhereInput[]
    OR?: TestcaseResultWhereInput[]
    NOT?: TestcaseResultWhereInput | TestcaseResultWhereInput[]
    testcase?: IntFilter<"TestcaseResult"> | number
    passed?: BoolFilter<"TestcaseResult"> | boolean
    stdin?: StringNullableFilter<"TestcaseResult"> | string | null
    stdout?: StringNullableFilter<"TestcaseResult"> | string | null
    expectedOutput?: StringNullableFilter<"TestcaseResult"> | string | null
    stderr?: StringNullableFilter<"TestcaseResult"> | string | null
    compileOutput?: StringNullableFilter<"TestcaseResult"> | string | null
    status?: StringFilter<"TestcaseResult"> | string
    memory?: StringNullableFilter<"TestcaseResult"> | string | null
    time?: StringNullableFilter<"TestcaseResult"> | string | null
    createdAt?: DateTimeFilter<"TestcaseResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestcaseResult"> | Date | string
    submissionId?: StringFilter<"TestcaseResult"> | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }, "id">

  export type TestcaseResultOrderByWithAggregationInput = {
    id?: SortOrder
    testcase?: SortOrder
    passed?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    expectedOutput?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
    _count?: TestcaseResultCountOrderByAggregateInput
    _avg?: TestcaseResultAvgOrderByAggregateInput
    _max?: TestcaseResultMaxOrderByAggregateInput
    _min?: TestcaseResultMinOrderByAggregateInput
    _sum?: TestcaseResultSumOrderByAggregateInput
  }

  export type TestcaseResultScalarWhereWithAggregatesInput = {
    AND?: TestcaseResultScalarWhereWithAggregatesInput | TestcaseResultScalarWhereWithAggregatesInput[]
    OR?: TestcaseResultScalarWhereWithAggregatesInput[]
    NOT?: TestcaseResultScalarWhereWithAggregatesInput | TestcaseResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestcaseResult"> | string
    testcase?: IntWithAggregatesFilter<"TestcaseResult"> | number
    passed?: BoolWithAggregatesFilter<"TestcaseResult"> | boolean
    stdin?: StringNullableWithAggregatesFilter<"TestcaseResult"> | string | null
    stdout?: StringNullableWithAggregatesFilter<"TestcaseResult"> | string | null
    expectedOutput?: StringNullableWithAggregatesFilter<"TestcaseResult"> | string | null
    stderr?: StringNullableWithAggregatesFilter<"TestcaseResult"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"TestcaseResult"> | string | null
    status?: StringWithAggregatesFilter<"TestcaseResult"> | string
    memory?: StringNullableWithAggregatesFilter<"TestcaseResult"> | string | null
    time?: StringNullableWithAggregatesFilter<"TestcaseResult"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TestcaseResult"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestcaseResult"> | Date | string
    submissionId?: StringWithAggregatesFilter<"TestcaseResult"> | string
  }

  export type problemSolvedWhereInput = {
    AND?: problemSolvedWhereInput | problemSolvedWhereInput[]
    OR?: problemSolvedWhereInput[]
    NOT?: problemSolvedWhereInput | problemSolvedWhereInput[]
    id?: StringFilter<"problemSolved"> | string
    createdAt?: DateTimeFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"problemSolved"> | Date | string
    userId?: StringFilter<"problemSolved"> | string
    problemId?: StringFilter<"problemSolved"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type problemSolvedOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type problemSolvedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_problemId?: problemSolvedUserIdProblemIdCompoundUniqueInput
    AND?: problemSolvedWhereInput | problemSolvedWhereInput[]
    OR?: problemSolvedWhereInput[]
    NOT?: problemSolvedWhereInput | problemSolvedWhereInput[]
    createdAt?: DateTimeFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"problemSolved"> | Date | string
    userId?: StringFilter<"problemSolved"> | string
    problemId?: StringFilter<"problemSolved"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "userId_problemId">

  export type problemSolvedOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    _count?: problemSolvedCountOrderByAggregateInput
    _max?: problemSolvedMaxOrderByAggregateInput
    _min?: problemSolvedMinOrderByAggregateInput
  }

  export type problemSolvedScalarWhereWithAggregatesInput = {
    AND?: problemSolvedScalarWhereWithAggregatesInput | problemSolvedScalarWhereWithAggregatesInput[]
    OR?: problemSolvedScalarWhereWithAggregatesInput[]
    NOT?: problemSolvedScalarWhereWithAggregatesInput | problemSolvedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"problemSolved"> | string
    createdAt?: DateTimeWithAggregatesFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"problemSolved"> | Date | string
    userId?: StringWithAggregatesFilter<"problemSolved"> | string
    problemId?: StringWithAggregatesFilter<"problemSolved"> | string
  }

  export type UserCreateInput = {
    id?: string
    fullName?: string | null
    userName: string
    email: string
    password: string
    avatarImage?: string
    role?: $Enums.UserRole
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    Submission?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName?: string | null
    userName: string
    email: string
    password: string
    avatarImage?: string
    role?: $Enums.UserRole
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    Submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    Submission?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    Submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName?: string | null
    userName: string
    email: string
    password: string
    avatarImage?: string
    role?: $Enums.UserRole
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    hints?: ProblemCreatehintsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints?: ProblemCreateconstraintsInput | string[]
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    Submission?: SubmissionCreateNestedManyWithoutProblemInput
    problemSolved?: problemSolvedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    hints?: ProblemCreatehintsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints?: ProblemCreateconstraintsInput | string[]
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    Submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    hints?: ProblemUpdatehintsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: ProblemUpdateconstraintsInput | string[]
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    Submission?: SubmissionUpdateManyWithoutProblemNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    hints?: ProblemUpdatehintsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: ProblemUpdateconstraintsInput | string[]
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    Submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    hints?: ProblemCreatehintsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints?: ProblemCreateconstraintsInput | string[]
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    hints?: ProblemUpdatehintsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: ProblemUpdateconstraintsInput | string[]
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    hints?: ProblemUpdatehintsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: ProblemUpdateconstraintsInput | string[]
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionInput
    problem: ProblemCreateNestedOneWithoutSubmissionInput
    testcaseResults?: TestcaseResultCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    problemId: string
    testcaseResults?: TestcaseResultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
    testcaseResults?: TestcaseResultUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    testcaseResults?: TestcaseResultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    problemId: string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
  }

  export type TestcaseResultCreateInput = {
    id?: string
    testcase: number
    passed: boolean
    stdin?: string | null
    stdout?: string | null
    expectedOutput?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission: SubmissionCreateNestedOneWithoutTestcaseResultsInput
  }

  export type TestcaseResultUncheckedCreateInput = {
    id?: string
    testcase: number
    passed: boolean
    stdin?: string | null
    stdout?: string | null
    expectedOutput?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
  }

  export type TestcaseResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneRequiredWithoutTestcaseResultsNestedInput
  }

  export type TestcaseResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
  }

  export type TestcaseResultCreateManyInput = {
    id?: string
    testcase: number
    passed: boolean
    stdin?: string | null
    stdout?: string | null
    expectedOutput?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissionId: string
  }

  export type TestcaseResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestcaseResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissionId?: StringFieldUpdateOperationsInput | string
  }

  export type problemSolvedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemSolvedInput
    problem: ProblemCreateNestedOneWithoutProblemSolvedInput
  }

  export type problemSolvedUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    problemId: string
  }

  export type problemSolvedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemSolvedNestedInput
    problem?: ProblemUpdateOneRequiredWithoutProblemSolvedNestedInput
  }

  export type problemSolvedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
  }

  export type problemSolvedCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    problemId: string
  }

  export type problemSolvedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput
    some?: ProblemWhereInput
    none?: ProblemWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type ProblemSolvedListRelationFilter = {
    every?: problemSolvedWhereInput
    some?: problemSolvedWhereInput
    none?: problemSolvedWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type problemSolvedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarImage?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpiry?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetTokenExpiry?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarImage?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpiry?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetTokenExpiry?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarImage?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpiry?: SortOrder
    passwordResetToken?: SortOrder
    passwordResetTokenExpiry?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    hints?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    editorial?: SortOrder
    testcases?: SortOrder
    codeSnippets?: SortOrder
    referenceSolutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput
    isNot?: ProblemWhereInput
  }

  export type TestcaseResultListRelationFilter = {
    every?: TestcaseResultWhereInput
    some?: TestcaseResultWhereInput
    none?: TestcaseResultWhereInput
  }

  export type TestcaseResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SubmissionScalarRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type TestcaseResultCountOrderByAggregateInput = {
    id?: SortOrder
    testcase?: SortOrder
    passed?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    expectedOutput?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
  }

  export type TestcaseResultAvgOrderByAggregateInput = {
    testcase?: SortOrder
  }

  export type TestcaseResultMaxOrderByAggregateInput = {
    id?: SortOrder
    testcase?: SortOrder
    passed?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    expectedOutput?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
  }

  export type TestcaseResultMinOrderByAggregateInput = {
    id?: SortOrder
    testcase?: SortOrder
    passed?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    expectedOutput?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submissionId?: SortOrder
  }

  export type TestcaseResultSumOrderByAggregateInput = {
    testcase?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type problemSolvedUserIdProblemIdCompoundUniqueInput = {
    userId: string
    problemId: string
  }

  export type problemSolvedCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
  }

  export type problemSolvedMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
  }

  export type problemSolvedMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
  }

  export type ProblemCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type problemSolvedCreateNestedManyWithoutUserInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type problemSolvedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProblemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type problemSolvedUpdateManyWithoutUserNestedInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutUserInput | problemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutUserInput | problemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutUserInput | problemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type problemSolvedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutUserInput | problemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutUserInput | problemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutUserInput | problemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type ProblemCreatetagsInput = {
    set: string[]
  }

  export type ProblemCreatehintsInput = {
    set: string[]
  }

  export type ProblemCreateconstraintsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProblemsInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type problemSolvedCreateNestedManyWithoutProblemInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type problemSolvedUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type ProblemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProblemUpdatehintsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProblemUpdateconstraintsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    upsert?: UserUpsertWithoutProblemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemsInput, UserUpdateWithoutProblemsInput>, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type SubmissionUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type problemSolvedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutProblemInput | problemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutProblemInput | problemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutProblemInput | problemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type problemSolvedUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutProblemInput | problemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutProblemInput | problemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutProblemInput | problemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSubmissionInput = {
    create?: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionInput
    connect?: ProblemWhereUniqueInput
  }

  export type TestcaseResultCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TestcaseResultCreateWithoutSubmissionInput, TestcaseResultUncheckedCreateWithoutSubmissionInput> | TestcaseResultCreateWithoutSubmissionInput[] | TestcaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestcaseResultCreateOrConnectWithoutSubmissionInput | TestcaseResultCreateOrConnectWithoutSubmissionInput[]
    createMany?: TestcaseResultCreateManySubmissionInputEnvelope
    connect?: TestcaseResultWhereUniqueInput | TestcaseResultWhereUniqueInput[]
  }

  export type TestcaseResultUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TestcaseResultCreateWithoutSubmissionInput, TestcaseResultUncheckedCreateWithoutSubmissionInput> | TestcaseResultCreateWithoutSubmissionInput[] | TestcaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestcaseResultCreateOrConnectWithoutSubmissionInput | TestcaseResultCreateOrConnectWithoutSubmissionInput[]
    createMany?: TestcaseResultCreateManySubmissionInputEnvelope
    connect?: TestcaseResultWhereUniqueInput | TestcaseResultWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionInput
    upsert?: UserUpsertWithoutSubmissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionInput, UserUpdateWithoutSubmissionInput>, UserUncheckedUpdateWithoutSubmissionInput>
  }

  export type ProblemUpdateOneRequiredWithoutSubmissionNestedInput = {
    create?: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionInput
    upsert?: ProblemUpsertWithoutSubmissionInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSubmissionInput, ProblemUpdateWithoutSubmissionInput>, ProblemUncheckedUpdateWithoutSubmissionInput>
  }

  export type TestcaseResultUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TestcaseResultCreateWithoutSubmissionInput, TestcaseResultUncheckedCreateWithoutSubmissionInput> | TestcaseResultCreateWithoutSubmissionInput[] | TestcaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestcaseResultCreateOrConnectWithoutSubmissionInput | TestcaseResultCreateOrConnectWithoutSubmissionInput[]
    upsert?: TestcaseResultUpsertWithWhereUniqueWithoutSubmissionInput | TestcaseResultUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TestcaseResultCreateManySubmissionInputEnvelope
    set?: TestcaseResultWhereUniqueInput | TestcaseResultWhereUniqueInput[]
    disconnect?: TestcaseResultWhereUniqueInput | TestcaseResultWhereUniqueInput[]
    delete?: TestcaseResultWhereUniqueInput | TestcaseResultWhereUniqueInput[]
    connect?: TestcaseResultWhereUniqueInput | TestcaseResultWhereUniqueInput[]
    update?: TestcaseResultUpdateWithWhereUniqueWithoutSubmissionInput | TestcaseResultUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TestcaseResultUpdateManyWithWhereWithoutSubmissionInput | TestcaseResultUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TestcaseResultScalarWhereInput | TestcaseResultScalarWhereInput[]
  }

  export type TestcaseResultUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TestcaseResultCreateWithoutSubmissionInput, TestcaseResultUncheckedCreateWithoutSubmissionInput> | TestcaseResultCreateWithoutSubmissionInput[] | TestcaseResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestcaseResultCreateOrConnectWithoutSubmissionInput | TestcaseResultCreateOrConnectWithoutSubmissionInput[]
    upsert?: TestcaseResultUpsertWithWhereUniqueWithoutSubmissionInput | TestcaseResultUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TestcaseResultCreateManySubmissionInputEnvelope
    set?: TestcaseResultWhereUniqueInput | TestcaseResultWhereUniqueInput[]
    disconnect?: TestcaseResultWhereUniqueInput | TestcaseResultWhereUniqueInput[]
    delete?: TestcaseResultWhereUniqueInput | TestcaseResultWhereUniqueInput[]
    connect?: TestcaseResultWhereUniqueInput | TestcaseResultWhereUniqueInput[]
    update?: TestcaseResultUpdateWithWhereUniqueWithoutSubmissionInput | TestcaseResultUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TestcaseResultUpdateManyWithWhereWithoutSubmissionInput | TestcaseResultUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TestcaseResultScalarWhereInput | TestcaseResultScalarWhereInput[]
  }

  export type SubmissionCreateNestedOneWithoutTestcaseResultsInput = {
    create?: XOR<SubmissionCreateWithoutTestcaseResultsInput, SubmissionUncheckedCreateWithoutTestcaseResultsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestcaseResultsInput
    connect?: SubmissionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubmissionUpdateOneRequiredWithoutTestcaseResultsNestedInput = {
    create?: XOR<SubmissionCreateWithoutTestcaseResultsInput, SubmissionUncheckedCreateWithoutTestcaseResultsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestcaseResultsInput
    upsert?: SubmissionUpsertWithoutTestcaseResultsInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutTestcaseResultsInput, SubmissionUpdateWithoutTestcaseResultsInput>, SubmissionUncheckedUpdateWithoutTestcaseResultsInput>
  }

  export type UserCreateNestedOneWithoutProblemSolvedInput = {
    create?: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemSolvedInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutProblemSolvedInput = {
    create?: XOR<ProblemCreateWithoutProblemSolvedInput, ProblemUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemSolvedInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProblemSolvedNestedInput = {
    create?: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemSolvedInput
    upsert?: UserUpsertWithoutProblemSolvedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemSolvedInput, UserUpdateWithoutProblemSolvedInput>, UserUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type ProblemUpdateOneRequiredWithoutProblemSolvedNestedInput = {
    create?: XOR<ProblemCreateWithoutProblemSolvedInput, ProblemUncheckedCreateWithoutProblemSolvedInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemSolvedInput
    upsert?: ProblemUpsertWithoutProblemSolvedInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutProblemSolvedInput, ProblemUpdateWithoutProblemSolvedInput>, ProblemUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProblemCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    hints?: ProblemCreatehintsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints?: ProblemCreateconstraintsInput | string[]
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Submission?: SubmissionCreateNestedManyWithoutProblemInput
    problemSolved?: problemSolvedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    hints?: ProblemCreatehintsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints?: ProblemCreateconstraintsInput | string[]
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    Submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutUserInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemCreateManyUserInputEnvelope = {
    data: ProblemCreateManyUserInput | ProblemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSubmissionInput
    testcaseResults?: TestcaseResultCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problemId: string
    testcaseResults?: TestcaseResultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type problemSolvedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutProblemSolvedInput
  }

  export type problemSolvedUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problemId: string
  }

  export type problemSolvedCreateOrConnectWithoutUserInput = {
    where: problemSolvedWhereUniqueInput
    create: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput>
  }

  export type problemSolvedCreateManyUserInputEnvelope = {
    data: problemSolvedCreateManyUserInput | problemSolvedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
  }

  export type ProblemUpdateManyWithWhereWithoutUserInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemScalarWhereInput = {
    AND?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    OR?: ProblemScalarWhereInput[]
    NOT?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    tags?: StringNullableListFilter<"Problem">
    hints?: StringNullableListFilter<"Problem">
    examples?: JsonFilter<"Problem">
    constraints?: StringNullableListFilter<"Problem">
    editorial?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codeSnippets?: JsonFilter<"Problem">
    referenceSolutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    userId?: StringFilter<"Problem"> | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
  }

  export type problemSolvedUpsertWithWhereUniqueWithoutUserInput = {
    where: problemSolvedWhereUniqueInput
    update: XOR<problemSolvedUpdateWithoutUserInput, problemSolvedUncheckedUpdateWithoutUserInput>
    create: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput>
  }

  export type problemSolvedUpdateWithWhereUniqueWithoutUserInput = {
    where: problemSolvedWhereUniqueInput
    data: XOR<problemSolvedUpdateWithoutUserInput, problemSolvedUncheckedUpdateWithoutUserInput>
  }

  export type problemSolvedUpdateManyWithWhereWithoutUserInput = {
    where: problemSolvedScalarWhereInput
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyWithoutUserInput>
  }

  export type problemSolvedScalarWhereInput = {
    AND?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
    OR?: problemSolvedScalarWhereInput[]
    NOT?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
    id?: StringFilter<"problemSolved"> | string
    createdAt?: DateTimeFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"problemSolved"> | Date | string
    userId?: StringFilter<"problemSolved"> | string
    problemId?: StringFilter<"problemSolved"> | string
  }

  export type UserCreateWithoutProblemsInput = {
    id?: string
    fullName?: string | null
    userName: string
    email: string
    password: string
    avatarImage?: string
    role?: $Enums.UserRole
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Submission?: SubmissionCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemsInput = {
    id?: string
    fullName?: string | null
    userName: string
    email: string
    password: string
    avatarImage?: string
    role?: $Enums.UserRole
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
  }

  export type SubmissionCreateWithoutProblemInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionInput
    testcaseResults?: TestcaseResultCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutProblemInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    testcaseResults?: TestcaseResultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionCreateManyProblemInputEnvelope = {
    data: SubmissionCreateManyProblemInput | SubmissionCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type problemSolvedCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemSolvedInput
  }

  export type problemSolvedUncheckedCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type problemSolvedCreateOrConnectWithoutProblemInput = {
    where: problemSolvedWhereUniqueInput
    create: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type problemSolvedCreateManyProblemInputEnvelope = {
    data: problemSolvedCreateManyProblemInput | problemSolvedCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProblemsInput = {
    update: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type UserUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Submission?: SubmissionUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutProblemInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutProblemInput>
  }

  export type problemSolvedUpsertWithWhereUniqueWithoutProblemInput = {
    where: problemSolvedWhereUniqueInput
    update: XOR<problemSolvedUpdateWithoutProblemInput, problemSolvedUncheckedUpdateWithoutProblemInput>
    create: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type problemSolvedUpdateWithWhereUniqueWithoutProblemInput = {
    where: problemSolvedWhereUniqueInput
    data: XOR<problemSolvedUpdateWithoutProblemInput, problemSolvedUncheckedUpdateWithoutProblemInput>
  }

  export type problemSolvedUpdateManyWithWhereWithoutProblemInput = {
    where: problemSolvedScalarWhereInput
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyWithoutProblemInput>
  }

  export type UserCreateWithoutSubmissionInput = {
    id?: string
    fullName?: string | null
    userName: string
    email: string
    password: string
    avatarImage?: string
    role?: $Enums.UserRole
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionInput = {
    id?: string
    fullName?: string | null
    userName: string
    email: string
    password: string
    avatarImage?: string
    role?: $Enums.UserRole
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
  }

  export type ProblemCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    hints?: ProblemCreatehintsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints?: ProblemCreateconstraintsInput | string[]
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    problemSolved?: problemSolvedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSubmissionInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    hints?: ProblemCreatehintsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints?: ProblemCreateconstraintsInput | string[]
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    problemSolved?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSubmissionInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
  }

  export type TestcaseResultCreateWithoutSubmissionInput = {
    id?: string
    testcase: number
    passed: boolean
    stdin?: string | null
    stdout?: string | null
    expectedOutput?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestcaseResultUncheckedCreateWithoutSubmissionInput = {
    id?: string
    testcase: number
    passed: boolean
    stdin?: string | null
    stdout?: string | null
    expectedOutput?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestcaseResultCreateOrConnectWithoutSubmissionInput = {
    where: TestcaseResultWhereUniqueInput
    create: XOR<TestcaseResultCreateWithoutSubmissionInput, TestcaseResultUncheckedCreateWithoutSubmissionInput>
  }

  export type TestcaseResultCreateManySubmissionInputEnvelope = {
    data: TestcaseResultCreateManySubmissionInput | TestcaseResultCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubmissionInput = {
    update: XOR<UserUpdateWithoutSubmissionInput, UserUncheckedUpdateWithoutSubmissionInput>
    create: XOR<UserCreateWithoutSubmissionInput, UserUncheckedCreateWithoutSubmissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionInput, UserUncheckedUpdateWithoutSubmissionInput>
  }

  export type UserUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSubmissionInput = {
    update: XOR<ProblemUpdateWithoutSubmissionInput, ProblemUncheckedUpdateWithoutSubmissionInput>
    create: XOR<ProblemCreateWithoutSubmissionInput, ProblemUncheckedCreateWithoutSubmissionInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSubmissionInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSubmissionInput, ProblemUncheckedUpdateWithoutSubmissionInput>
  }

  export type ProblemUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    hints?: ProblemUpdatehintsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: ProblemUpdateconstraintsInput | string[]
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    hints?: ProblemUpdatehintsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: ProblemUpdateconstraintsInput | string[]
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type TestcaseResultUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: TestcaseResultWhereUniqueInput
    update: XOR<TestcaseResultUpdateWithoutSubmissionInput, TestcaseResultUncheckedUpdateWithoutSubmissionInput>
    create: XOR<TestcaseResultCreateWithoutSubmissionInput, TestcaseResultUncheckedCreateWithoutSubmissionInput>
  }

  export type TestcaseResultUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: TestcaseResultWhereUniqueInput
    data: XOR<TestcaseResultUpdateWithoutSubmissionInput, TestcaseResultUncheckedUpdateWithoutSubmissionInput>
  }

  export type TestcaseResultUpdateManyWithWhereWithoutSubmissionInput = {
    where: TestcaseResultScalarWhereInput
    data: XOR<TestcaseResultUpdateManyMutationInput, TestcaseResultUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type TestcaseResultScalarWhereInput = {
    AND?: TestcaseResultScalarWhereInput | TestcaseResultScalarWhereInput[]
    OR?: TestcaseResultScalarWhereInput[]
    NOT?: TestcaseResultScalarWhereInput | TestcaseResultScalarWhereInput[]
    id?: StringFilter<"TestcaseResult"> | string
    testcase?: IntFilter<"TestcaseResult"> | number
    passed?: BoolFilter<"TestcaseResult"> | boolean
    stdin?: StringNullableFilter<"TestcaseResult"> | string | null
    stdout?: StringNullableFilter<"TestcaseResult"> | string | null
    expectedOutput?: StringNullableFilter<"TestcaseResult"> | string | null
    stderr?: StringNullableFilter<"TestcaseResult"> | string | null
    compileOutput?: StringNullableFilter<"TestcaseResult"> | string | null
    status?: StringFilter<"TestcaseResult"> | string
    memory?: StringNullableFilter<"TestcaseResult"> | string | null
    time?: StringNullableFilter<"TestcaseResult"> | string | null
    createdAt?: DateTimeFilter<"TestcaseResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestcaseResult"> | Date | string
    submissionId?: StringFilter<"TestcaseResult"> | string
  }

  export type SubmissionCreateWithoutTestcaseResultsInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionInput
    problem: ProblemCreateNestedOneWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutTestcaseResultsInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    problemId: string
  }

  export type SubmissionCreateOrConnectWithoutTestcaseResultsInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutTestcaseResultsInput, SubmissionUncheckedCreateWithoutTestcaseResultsInput>
  }

  export type SubmissionUpsertWithoutTestcaseResultsInput = {
    update: XOR<SubmissionUpdateWithoutTestcaseResultsInput, SubmissionUncheckedUpdateWithoutTestcaseResultsInput>
    create: XOR<SubmissionCreateWithoutTestcaseResultsInput, SubmissionUncheckedCreateWithoutTestcaseResultsInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutTestcaseResultsInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutTestcaseResultsInput, SubmissionUncheckedUpdateWithoutTestcaseResultsInput>
  }

  export type SubmissionUpdateWithoutTestcaseResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutTestcaseResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutProblemSolvedInput = {
    id?: string
    fullName?: string | null
    userName: string
    email: string
    password: string
    avatarImage?: string
    role?: $Enums.UserRole
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    Submission?: SubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemSolvedInput = {
    id?: string
    fullName?: string | null
    userName: string
    email: string
    password: string
    avatarImage?: string
    role?: $Enums.UserRole
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    passwordResetToken?: string | null
    passwordResetTokenExpiry?: Date | string | null
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    Submission?: SubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemSolvedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
  }

  export type ProblemCreateWithoutProblemSolvedInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    hints?: ProblemCreatehintsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints?: ProblemCreateconstraintsInput | string[]
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    Submission?: SubmissionCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutProblemSolvedInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    hints?: ProblemCreatehintsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints?: ProblemCreateconstraintsInput | string[]
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    Submission?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutProblemSolvedInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutProblemSolvedInput, ProblemUncheckedCreateWithoutProblemSolvedInput>
  }

  export type UserUpsertWithoutProblemSolvedInput = {
    update: XOR<UserUpdateWithoutProblemSolvedInput, UserUncheckedUpdateWithoutProblemSolvedInput>
    create: XOR<UserCreateWithoutProblemSolvedInput, UserUncheckedCreateWithoutProblemSolvedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemSolvedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemSolvedInput, UserUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type UserUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    Submission?: SubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarImage?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passwordResetToken?: NullableStringFieldUpdateOperationsInput | string | null
    passwordResetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    Submission?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutProblemSolvedInput = {
    update: XOR<ProblemUpdateWithoutProblemSolvedInput, ProblemUncheckedUpdateWithoutProblemSolvedInput>
    create: XOR<ProblemCreateWithoutProblemSolvedInput, ProblemUncheckedCreateWithoutProblemSolvedInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutProblemSolvedInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutProblemSolvedInput, ProblemUncheckedUpdateWithoutProblemSolvedInput>
  }

  export type ProblemUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    hints?: ProblemUpdatehintsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: ProblemUpdateconstraintsInput | string[]
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    Submission?: SubmissionUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutProblemSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    hints?: ProblemUpdatehintsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: ProblemUpdateconstraintsInput | string[]
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    Submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    tags?: ProblemCreatetagsInput | string[]
    hints?: ProblemCreatehintsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints?: ProblemCreateconstraintsInput | string[]
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codeSnippets: JsonNullValueInput | InputJsonValue
    referenceSolutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problemId: string
  }

  export type problemSolvedCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problemId: string
  }

  export type ProblemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    hints?: ProblemUpdatehintsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: ProblemUpdateconstraintsInput | string[]
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Submission?: SubmissionUpdateManyWithoutProblemNestedInput
    problemSolved?: problemSolvedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    hints?: ProblemUpdatehintsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: ProblemUpdateconstraintsInput | string[]
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Submission?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    problemSolved?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    tags?: ProblemUpdatetagsInput | string[]
    hints?: ProblemUpdatehintsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: ProblemUpdateconstraintsInput | string[]
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codeSnippets?: JsonNullValueInput | InputJsonValue
    referenceSolutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSubmissionNestedInput
    testcaseResults?: TestcaseResultUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problemId?: StringFieldUpdateOperationsInput | string
    testcaseResults?: TestcaseResultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problemId?: StringFieldUpdateOperationsInput | string
  }

  export type problemSolvedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutProblemSolvedNestedInput
  }

  export type problemSolvedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problemId?: StringFieldUpdateOperationsInput | string
  }

  export type problemSolvedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problemId?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateManyProblemInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type problemSolvedCreateManyProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type SubmissionUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionNestedInput
    testcaseResults?: TestcaseResultUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    testcaseResults?: TestcaseResultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type problemSolvedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemSolvedNestedInput
  }

  export type problemSolvedUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type problemSolvedUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TestcaseResultCreateManySubmissionInput = {
    id?: string
    testcase: number
    passed: boolean
    stdin?: string | null
    stdout?: string | null
    expectedOutput?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestcaseResultUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestcaseResultUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestcaseResultUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testcase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    expectedOutput?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}