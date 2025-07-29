import { useState, useEffect } from 'react';
import { useLocalStorage } from './hook/localstorage';

function App() {
  const [congViecMoi, capNhatCongViecMoi] = useState('');
  const [thoiHanMoi, capNhatThoiHanMoi] = useState('');
  const [giaTriHienTai, capNhatGiaTri] = useLocalStorage('todos', []);

  const themCongViec = () => {
    if (!congViecMoi || !thoiHanMoi) return;
    capNhatGiaTri([
      ...giaTriHienTai,
      {
        id: Date.now(),
        task: congViecMoi,
        deadline: thoiHanMoi,
        completed: false,
      },
    ]);
    capNhatCongViecMoi('');
    capNhatThoiHanMoi('');
  };

  const doiTrangThai = (id) => {
    const capNhatTrangThai = giaTriHienTai.map((todo) =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );
    capNhatGiaTri(capNhatTrangThai);
  };

  const isGanHetHan = (deadline) => {
    const ngayHetHan = new Date(deadline);
    const homNay = new Date();
    const timeDiff = ngayHetHan - homNay;
    const ngayConLai = timeDiff / (1000 * 60 * 60 * 24);
    return ngayConLai <= 2 && ngayConLai >= 0;
  };

  useEffect(() => {
    const congViecQuaHan = giaTriHienTai.filter(todo =>
      !todo.completed && new Date(todo.deadline) < new Date()
    );
    if (congViecQuaHan.length > 0) {
      alert(`🔔 Có ${congViecQuaHan.length} công việc đã quá hạn!`);
    }
  }, [giaTriHienTai]);

  return (
    <div style={{ padding: '1rem', maxWidth: '500px', margin: 'auto' }}>
      <h2> Todo App — Danh sách công việc</h2>

      <input
        type="text"
        placeholder="Nhập công việc..."
        value={congViecMoi}
        onChange={(e) => capNhatCongViecMoi(e.target.value)}
        style={{ marginBottom: '0.5rem', width: '100%' }}
      />

      <input
        type="date"
        value={thoiHanMoi}
        onChange={(e) => capNhatThoiHanMoi(e.target.value)}
        style={{ marginBottom: '0.5rem', width: '100%' }}
      />

      <button onClick={themCongViec} style={{ marginBottom: '1rem' }}>
         Thêm công việc
      </button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {giaTriHienTai.map(({ id, task, deadline, completed }) => (
          <li
            key={id}
            style={{
              marginBottom: '1rem',
              background: completed ? '#d4edda' : '#f2f2f2',
              padding: '0.5rem',
              borderRadius: '4px',
            }}
          >
            <span
              style={{
                textDecoration: completed ? 'line-through' : 'none',
                fontWeight: 'bold',
              }}
            >
              {task}
            </span>
            <br />
            <span style={{ color: isGanHetHan(deadline) ? 'red' : '#333' }}>
               {deadline}
            </span>
            <br />
            <button onClick={() => doiTrangThai(id)}>
              {completed ? ' Hoàn thành' : ' Chưa xong'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;