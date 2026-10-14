import { Outlet, useOutletContext } from 'react-router';
import { agiContent, type AgiContent } from './content';

export function useAgiPageContent() {
  return useOutletContext<AgiContent>();
}

export function AgiLayout() {
  return <Outlet context={agiContent} />;
}
