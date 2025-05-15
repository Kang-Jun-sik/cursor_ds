import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outlined'],
      description: '버튼의 스타일 변형',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼의 크기',
    },
    fullWidth: {
      control: 'boolean',
      description: '버튼을 컨테이너의 전체 너비로 확장',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 상태',
    },
    children: {
      control: 'text',
      description: '버튼 내부 콘텐츠',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary 버튼 스토리
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

// Secondary 버튼 스토리
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

// Outlined 버튼 스토리
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined Button',
  },
};

// 크기별 버튼 스토리
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

// Full Width 버튼 스토리
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
};

// Disabled 버튼 스토리
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// 모든 변형을 보여주는 스토리
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outlined">Outlined</Button>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <Button fullWidth>Full Width</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
}; 