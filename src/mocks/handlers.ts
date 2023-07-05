import { rest } from 'msw';
import PanelList from '../withTS/components/Dashboard/PanelList.json';

export const handlers = [
  rest.get('/panels', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(PanelList),
    );
  }),
]
