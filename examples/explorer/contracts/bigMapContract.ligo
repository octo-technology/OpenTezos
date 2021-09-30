type storage is big_map (nat, address)
type entrypoints is unit

function main (const action : entrypoints; const store : storage): list (operation) * storage is
    ((nil: list(operation)), store)