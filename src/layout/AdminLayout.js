import React from 'react'
import { navSections } from '../layout/AdminNavSections';
import AdminHeader from '../components/AdminHeader';
import BottomNavbar from '../components/BottomNavbar';

function AdminLayout() {
  return (
    <>
      <AdminHeader navSections={navSections} />
      <BottomNavbar navSections={navSections} />
    </>
  )
}

export default AdminLayout