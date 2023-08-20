//define LinkedList interface with current prev and next
export interface LinkedList<T> {
  current: T;
  prev: LinkedList<T> | null;
  next: LinkedList<T> | null;
}

export interface Node{
  value: number;
  next: Node | null;
}

