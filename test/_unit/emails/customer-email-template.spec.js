'use strict';

const fs = require('fs');
const path = require('path');
const mustache = require('mustache');

describe('Customer email template', () => {
  const templatePath = path.resolve(__dirname, '../../../apps/eta/emails/customer.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  it('renders customer details and ETA warning when data row has a value', () => {
    const output = mustache.render(template, {
      name: 'Alex Example',
      'your-question': 'When will I get my decision?',
      data: [
        {
          table: [
            {
              value: 'If you need to travel soon'
            }
          ]
        }
      ]
    });

    expect(output).toContain('Dear Alex Example');
    expect(output).toContain('When will I get my decision?');
    expect(output).toContain('If you need to travel soon');
    expect(output).toContain('You must apply for an ETA before you travel to the UK.');
  });

  it('does not render ETA warning block when value is empty', () => {
    const output = mustache.render(template, {
      name: 'Alex Example',
      'your-question': 'When will I get my decision?',
      data: [
        {
          table: [
            {
              value: ''
            }
          ]
        }
      ]
    });

    expect(output).not.toContain('You must apply for an ETA before you travel to the UK.');
  });
});
