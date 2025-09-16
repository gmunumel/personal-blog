"use client";

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import * as React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";
import { create } from "zustand";
import CopyButton from "@/app/components/CopyButton";

// Redux setup
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });
const { increment, decrement } = counterSlice.actions;

// Zustand setup
const useBearStore = create((set) => ({
  bears: 0,
  increase: () => set((state: any) => ({ bears: state.bears + 1 })),
}));

// Custom wrapper so LivePreview always has Redux store
function PreviewWithProviders() {
  return (
    <Provider store={store}>
      <LivePreview className="p-2 border rounded m-2" />
    </Provider>
  );
}

export default function JavascriptRunner({ code }: { code: string }) {
  return (
    <LiveProvider
      code={code}
      scope={{
        React,
        configureStore,
        createSlice,
        Provider,
        store,
        increment,
        decrement,
        useDispatch,
        useSelector,
        useBearStore,
      }}
    >
      <div className="p-4 rounded-xl border shadow space-y-3 mb-2">
        <PreviewWithProviders />
        <div className="top-2 relative">
          <CopyButton getText={() => code} />
        </div>
        <LiveEditor className="text-white p-2 rounded text-sm" />
        <LiveError className="text-red-500" />
      </div>
    </LiveProvider>
  );
}
