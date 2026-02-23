"use client"
import React, { useState } from 'react';

function TableRow({ row, selected, onSelect, onDelete, onDetails }) {
  return (
    <tr>
      <th>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={selected}
            onChange={() => onSelect(row.id)}
          />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={row.avatar} alt={row.name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{row.name}</div>
            <div className="text-sm opacity-50">{row.country}</div>
          </div>
        </div>
      </td>
      <td>
        {row.company}
        <br />
        <span className="badge badge-ghost badge-sm">{row.job}</span>
      </td>
      <td>{row.color}</td>
      <th className="flex gap-1">
        <button className="btn btn-ghost btn-xs" onClick={() => onDetails(row)}>
          details
        </button>
        <button className="btn btn-error btn-xs" onClick={() => onDelete(row.id)}>
          ✕
        </button>
      </th>
    </tr>
  );
}

export default function Table({
  initialRows = [],
  columns = ['Name', 'Job', 'Favorite Color'],
  onDetails = (row) => alert(JSON.stringify(row, null, 2)),
}) {
  const [rows, setRows] = useState(initialRows);
  const [selected, setSelected] = useState([]);
  const [form, setForm] = useState({
    name: '', country: '', avatar: '', company: '', job: '', color: '',
  });

  const toggleSelect = (id) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );

  const toggleAll = () =>
    setSelected(selected.length === rows.length ? [] : rows.map((r) => r.id));

  const deleteRow = (id) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
    setSelected((prev) => prev.filter((s) => s !== id));
  };

  const deleteSelected = () => {
    setRows((prev) => prev.filter((r) => !selected.includes(r.id)));
    setSelected([]);
  };

  const handleAdd = () => {
    if (!form.name.trim()) return;
    const newRow = {
      ...form,
      id: Date.now(),
      avatar: form.avatar || 'https://img.daisyui.com/images/profile/demo/1@94.webp',
    };
    setRows((prev) => [...prev, newRow]);
    setForm({ name: '', country: '', avatar: '', company: '', job: '', color: '' });
  };

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="p-4 space-y-4">
      {/* ── Add Form ── */}
      <div className="flex flex-wrap gap-2 items-end bg-base-200 p-3 rounded-lg">
        {['name', 'country', 'company', 'job', 'color', 'avatar'].map((field) => (
          <input
            key={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="input input-bordered input-sm w-36"
          />
        ))}
        <button className="btn btn-primary btn-sm" onClick={handleAdd}>
          + Add Row
        </button>
      </div>

      {selected.length > 0 && (
        <button className="btn btn-error btn-sm" onClick={deleteSelected}>
          Delete selected ({selected.length})
        </button>
      )}

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={rows.length > 0 && selected.length === rows.length}
                    onChange={toggleAll}
                  />
                </label>
              </th>
              {columns.map((col) => <th key={col}>{col}</th>)}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                row={row}
                selected={selected.includes(row.id)}
                onSelect={toggleSelect}
                onDelete={deleteRow}
                onDetails={onDetails}
              />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              {columns.map((col) => <th key={col}>{col}</th>)}
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
