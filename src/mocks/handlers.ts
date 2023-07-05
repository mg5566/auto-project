import { rest } from 'msw';
import PanelList from '../withTS/components/Dashboard/PanelList.json';

export const handlers = [
  rest.get('/panels', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(PanelList),
    );
  }),
  rest.get('/panel/:panelId', (req, res, ctx) => {
    const { panelId } = req.params;
    return res(
      ctx.status(200),
      ctx.json(PanelList.find((panel) => panel.panelId === panelId)),
    );
  })
]
