import { useState, useEffect } from 'react';

export const useLocalStorage = (key, giaTriKhoiTao) => {
  const [giaTriHienTai, capNhatGiaTri] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : giaTriKhoiTao;
    } catch (error) {
      console.error('Lỗi khi đọc localStorage:', error);
      return giaTriKhoiTao;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(giaTriHienTai));
    } catch (error) {
      console.error('Lỗi khi ghi localStorage:', error);
    }
  }, [key, giaTriHienTai]);

  return [giaTriHienTai, capNhatGiaTri];
};