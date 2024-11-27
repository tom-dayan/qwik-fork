import {
  Fragment as Component,
  component$,
  useSignal,
  useVisibleTask$,
  type Signal,
} from '@qwik.dev/core';
import { domRender, ssrRenderToDom, trigger } from '@qwik.dev/core/testing';
import { describe, expect, it } from 'vitest';
import { vnode_isElementVNode } from '../client/vnode';

const debug = false; //true;
Error.stackTraceLimit = 100;

describe.each([
  { render: ssrRenderToDom }, //
  { render: domRender }, //
])('$render.name: ref', ({ render }) => {
  describe('useVisibleTask$', () => {
    it('should handle ref prop', async () => {
      const Cmp = component$(() => {
        const v = useSignal<Element>();
        useVisibleTask$(() => {
          v.value!.textContent = 'Abcd';
        });
        return <p ref={v}>Hello Qwik</p>;
      });

      const { document } = await render(<Cmp />, { debug });

      if (render === ssrRenderToDom) {
        await trigger(document.body, 'p', 'qvisible');
      }

      await expect(document.querySelector('p')).toMatchDOM(<p>Abcd</p>);
    });
  });

  it('should execute function', async () => {
    (global as any).logs = [] as string[];
    const Cmp = component$(() => {
      return (
        <div
          ref={(element) => {
            (global as any).logs.push('ref function', element);
          }}
        ></div>
      );
    });

    const { vNode } = await render(<Cmp />, { debug });

    expect(vNode).toMatchVDOM(
      <Component>
        <div></div>
      </Component>
    );

    expect((global as any).logs[0]).toEqual('ref function');
    expect((global as any).logs[1]).toBeDefined();
    (global as any).logs = undefined;
  });

  it('should serialize ref as a component prop', async () => {
    (globalThis as any).element = [] as HTMLElement[];
    const Child = component$<{ elRef: { ref: Signal<HTMLElement[]>; index: number } }>(
      ({ elRef }) => {
        const ref = elRef
          ? (el: Element) => {
              elRef.ref.value[elRef.index] = el as HTMLElement;
            }
          : undefined;

        return <span ref={ref}></span>;
      }
    );

    const Parent = component$(() => {
      const childElements = useSignal<HTMLElement[]>([]);

      useVisibleTask$(() => {
        (globalThis as any).element.push(childElements.value[0]);
      });

      return (
        <div>
          <Child elRef={{ ref: childElements, index: 0 }} />
        </div>
      );
    });

    const { document } = await render(<Parent />, { debug });

    if (ssrRenderToDom === render) {
      await trigger(document.body, 'div', 'qvisible');
    }

    expect(vnode_isElementVNode((globalThis as any).element[0])).toBeFalsy();
    (globalThis as any).element = undefined;
  });
});
