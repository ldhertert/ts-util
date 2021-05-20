export function isObject(obj: unknown): boolean {
    return typeof obj === 'object' && !Array.isArray(obj);
}

export function isArray(obj: unknown): obj is unknown[] {
    return Array.isArray(obj)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export function get(obj: any, path: string, defaultValue: any = undefined): any {
    const travel = (regexp: RegExp) => {
      return String.prototype.split
        .call(path, regexp)
        .filter(Boolean)
        .reduce((res, key) => (res !== null && res !== undefined ? res[key] : res), obj);
    }
    const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
  }

export function flatten(obj: unknown): string[] {
    
    function addDelimiter(a: string, b: string): string {
        return a ? `${a}.${b}` : b;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const paths = (obj: any = {}, head = ''): string[] => {
        return Object.entries(obj)
            .reduce((product: string[], [key, value]) => {
                const fullPath = addDelimiter(head, key)

                if (isObject(value)) {
                    return product.concat(paths(value, fullPath))
                }
                if (isArray(value)) {
                    value.forEach((child, index) => {
                        product = product.concat(paths(child, fullPath + `[${index}]`))
                    })
                    return product
                }
                return product.concat(fullPath)
            }, []);
    }

    return paths(obj);
}
