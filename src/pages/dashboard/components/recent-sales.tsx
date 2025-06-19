import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function RecentSales() {
  return (
    <div className='space-y-8'>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://www.frejoux-photographe.fr/wp-content/gallery/portrait-pro-corporate/Photographe-portrait-entreprise-pro-Corporate-toulon-Celine.jpg' alt='Avatar' />
          <AvatarFallback>CR</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Celine Ramirez</p>
          <p className='text-sm text-muted-foreground'>
            sofiaramirez@email.com
          </p>
        </div>
        <div className='ml-auto font-medium'>+$1,999.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='https://www.sophiebourgeixphotographe.com/wp-content/uploads/2016/10/01portraits-professionnel-sophie-bourgeix-2-e1481494048320.jpg' alt='Avatar' />
          <AvatarFallback>NB</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Noah Bennett</p>
          <p className='text-sm text-muted-foreground'>noahbennett@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$39.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://www.frejoux-photographe.fr/wp-content/gallery/portrait-pro-corporate/Photographe-portrait-entreprise-pro-Corporate-toulon-Peggy.jpg' alt='Avatar' />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Isabella Nguyen</p>
          <p className='text-sm text-muted-foreground'>
            isabella.nguyen@email.com
          </p>
        </div>
        <div className='ml-auto font-medium'>+$299.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://puncdium.fr/wp-content/uploads/2021/12/Photo-PUNCDIUM-SS_019A7643-copy.jpg' alt='Avatar' />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>William Kim</p>
          <p className='text-sm text-muted-foreground'>will@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$99.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='https://storage.canalblog.com/50/89/1228697/127715041.jpg' alt='Avatar' />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Sofia Davis</p>
          <p className='text-sm text-muted-foreground'>sofia.davis@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$39.00</div>
      </div>
    </div>
  )
}
